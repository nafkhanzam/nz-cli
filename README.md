nz-cli
======

command utilities for nafkhanzam projects

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nz-cli.svg)](https://npmjs.org/package/nz-cli)
[![Downloads/week](https://img.shields.io/npm/dw/nz-cli.svg)](https://npmjs.org/package/nz-cli)
[![License](https://img.shields.io/npm/l/nz-cli.svg)](https://github.com/nafkhanzam/nz-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @nafkhanzam/nz-cli
$ nz COMMAND
running command...
$ nz (-v|--version|version)
@nafkhanzam/nz-cli/0.0.29 linux-x64 node-v17.8.0
$ nz --help [COMMAND]
USAGE
  $ nz COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nz check:package`](#nz-checkpackage)
* [`nz gen:all`](#nz-genall)
* [`nz gen:assets`](#nz-genassets)
* [`nz gen:class`](#nz-genclass)
* [`nz gen:exports`](#nz-genexports)
* [`nz gen:urls`](#nz-genurls)
* [`nz help [COMMAND]`](#nz-help-command)

## `nz check:package`

```
USAGE
  $ nz check:package

OPTIONS
  -c, --config=config  Configuration file path.
```

_See code: [src/commands/check/package.ts](https://github.com/nafkhanzam/nz-cli/blob/v0.0.29/src/commands/check/package.ts)_

## `nz gen:all`

```
USAGE
  $ nz gen:all

OPTIONS
  -c, --config=config  Configuration file path.
```

_See code: [src/commands/gen/all.ts](https://github.com/nafkhanzam/nz-cli/blob/v0.0.29/src/commands/gen/all.ts)_

## `nz gen:assets`

```
USAGE
  $ nz gen:assets

OPTIONS
  -c, --config=config  Configuration file path.
```

_See code: [src/commands/gen/assets.ts](https://github.com/nafkhanzam/nz-cli/blob/v0.0.29/src/commands/gen/assets.ts)_

## `nz gen:class`

```
USAGE
  $ nz gen:class

OPTIONS
  -c, --config=config  Configuration file path.
```

_See code: [src/commands/gen/class.ts](https://github.com/nafkhanzam/nz-cli/blob/v0.0.29/src/commands/gen/class.ts)_

## `nz gen:exports`

```
USAGE
  $ nz gen:exports

OPTIONS
  -c, --config=config  Configuration file path.
```

_See code: [src/commands/gen/exports.ts](https://github.com/nafkhanzam/nz-cli/blob/v0.0.29/src/commands/gen/exports.ts)_

## `nz gen:urls`

```
USAGE
  $ nz gen:urls

OPTIONS
  -c, --config=config  Configuration file path.
```

_See code: [src/commands/gen/urls.ts](https://github.com/nafkhanzam/nz-cli/blob/v0.0.29/src/commands/gen/urls.ts)_

## `nz help [COMMAND]`

display help for nz

```
USAGE
  $ nz help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.4/src/commands/help.ts)_
<!-- commandsstop -->
