# vfile-reporter-pretty [![Build][build-badge]][build] [![Coverage][coverage-badge]][coverage] [![Chat][chat-badge]][chat]

Pretty reporter for [vfile][].

For example, get pretty output from [remark-lint][].

![][screenshot]

## Install

[npm][]:

```bash
npm install vfile-reporter-pretty
```

## Usage

```js
const vfile = require('vfile')
const vfileReporterPretty = require('vfile-reporter-pretty')

const file = vfile({path: '~/example.md'})

file.message('`braavo` is misspelt; did you mean `bravo`?', {line: 1, column: 8})
file.info('This is perfect', {line: 2, column: 1})

try {
  file.fail('This is horrible', {line: 3, column: 5})
} catch (error) {}

console.log(vfileReporterPretty([file]))
```

### `vfileReporterPretty(files)`

Create a report (`string`) for the given files.

###### `files`

List of files ([`Array.<VFile>`][vfile]).

## Contribute

See [`contributing.md` in `vfile/vfile`][contributing] for ways to get started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Sindre Sorhus][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/vfile/vfile-reporter-pretty.svg?branch=master

[build]: https://travis-ci.org/vfile/vfile-reporter-pretty

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/vfile-reporter-pretty.svg

[coverage]: https://codecov.io/github/vfile/vfile-reporter-pretty

[chat-badge]: https://img.shields.io/gitter/room/vfile/Lobby.svg

[chat]: https://gitter.im/vfile/Lobby

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://sindresorhus.com

[screenshot]: screenshot.png

[contributing]: https://github.com/vfile/vfile/blob/master/contributing.md

[coc]: https://github.com/vfile/vfile/blob/master/code-of-conduct.md

[remark-lint]: https://github.com/remarkjs/remark-lint

[vfile]: https://github.com/vfile/vfile
