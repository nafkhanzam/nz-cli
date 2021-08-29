import fg from "fast-glob";
import _ from "lodash";
import path from "path";
import {NzConfig} from "../config";
import {NzCommand} from "../nz-command";

const KEY = "gen-class";

class ObjectGenerator {
  constructor(
    private obj: object | string,
    private opts?: {
      isRoot?: boolean;
      prefixContent?: string;
    },
  ) {}

  generate() {
    const prefixContent = this.opts?.prefixContent;
    const isRoot = !!this.opts?.isRoot;
    const assignSymbol = isRoot ? " = " : ": ";
    const endSymbol = isRoot ? ";" : ",";
    if (typeof this.obj === "object") {
      const strs: string[] = [];
      for (const [key, value] of Object.entries(this.obj)) {
        strs.push(
          `${key}${assignSymbol}${new ObjectGenerator(
            value,
          ).generate()}${endSymbol}`,
        );
      }
      return `{
        ${prefixContent ? `${prefixContent}\n` : ""}
        ${strs.sort().join("\n")}
      }`;
    } else {
      return this.obj;
    }
  }
}

export default class GenClass extends NzCommand {
  override async run(): Promise<void> {
    const {flags} = this.parse(GenClass);
    const [rootConf, confPath] = await this.readConfig(flags.config);
    const confs = rootConf[KEY];
    if (confs) {
      for (const conf of confs) {
        this.impl(conf);
      }
    } else {
      this.configNotFoundError(KEY, confPath);
    }
  }

  private async impl(
    conf: NonNullable<NzConfig[typeof KEY]>[number],
  ): Promise<void> {
    const {
      output,
      extensions,
      className,
      extendClass,
      prefixContent,
      ignores,
      fieldNameExceptionMap,
    } = conf;

    // Implementation
    const outputPath = path.parse(output);
    const filterFg =
      extensions.length > 0
        ? extensions.map((v) => `${outputPath.dir}/**/*.${v}`)
        : [`${outputPath.dir}/**/*`];
    const rawEntries = await fg([
      ...filterFg,
      `!**/_*`,
      ...ignores.map((v) => `!${v}`),
    ]);
    const obj: object = {};
    const imports: string[] = [];

    let extendStr = ``;
    if (extendClass) {
      imports.push(
        `import {${extendClass.className}} from "${extendClass.importFrom}";`,
      );
      extendStr = ` extends ${extendClass.className}`;
    }

    for (const entry of rawEntries) {
      if (entry === output) {
        continue;
      }
      const {dir, name} = path.parse(path.relative(outputPath.dir, entry));
      const exportName =
        fieldNameExceptionMap[name] ?? _.upperFirst(_.camelCase(name));
      imports.push(
        `import {${exportName}} from "./${path
          .normalize(`./${dir}/${name}`)
          .replace(/\\/, "/")}";`,
      );
      const dirarr = dir.split("/").filter((v) => !!v);
      let varPath: string;
      if (dirarr.length) {
        varPath = `${dirarr.map(_.camelCase).join(".")}.${exportName}`;
      } else {
        varPath = exportName;
      }
      _.set(obj, varPath, exportName);
    }

    const res = `
      ${imports.sort().join("\n")}

      export class ${className}${extendStr} ${new ObjectGenerator(obj, {
      isRoot: true,
      prefixContent,
    }).generate()}
    `;

    await this.writeOutput(output, res);
  }
}
