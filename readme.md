# vfile-reporter-pretty

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Chat][chat-badge]][chat]

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

[build-badge]: https://img.shields.io/travis/vfile/vfile-reporter-pretty.svg

[build]: https://travis-ci.org/vfile/vfile-reporter-pretty

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/vfile-reporter-pretty.svg

[coverage]: https://codecov.io/github/vfile/vfile-reporter-pretty

[downloads-badge]: https://img.shields.io/npm/dm/vfile-reporter-pretty.svg

[downloads]: https://www.npmjs.com/package/vfile-reporter-pretty

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/vfile

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://sindresorhus.com

[screenshot]: screenshot.png

[contributing]: https://github.com/vfile/vfile/blob/master/contributing.md

[coc]: https://github.com/vfile/vfile/blob/master/code-of-conduct.md

[remark-lint]: https://github.com/remarkjs/remark-lint

[vfile]: https://github.com/vfile/vfile
