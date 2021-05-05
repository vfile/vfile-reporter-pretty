# vfile-reporter-pretty

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Create a pretty report for a **[vfile][]**.

![][screenshot]

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install vfile-reporter-pretty
```

## Use

```js
import {VFile} from 'vfile'
import {reporterPretty} from 'vfile-reporter-pretty'

const file = new VFile({path: '~/example.md'})

file.message('`braavo` is misspelt; did you mean `bravo`?', {line: 1, column: 8})
file.info('This is perfect', {line: 2, column: 1})

try {
  file.fail('This is horrible', {line: 3, column: 5})
} catch (error) {}

console.log(reporterPretty([file]))
```

## API

This package exports the following identifiers: `reporterPretty`.
There is no default export.

### `reporterPretty(files)`

Create a report (`string`) for the given files.

###### `files`

List of files ([`Array.<VFile>`][vfile]).

## Contribute

See [`contributing.md`][contributing] in [`vfile/.github`][health] for ways to
get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Sindre Sorhus][author]

<!-- Definitions -->

[build-badge]: https://github.com/vfile/vfile-reporter-pretty/workflows/main/badge.svg

[build]: https://github.com/vfile/vfile-reporter-pretty/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/vfile-reporter-pretty.svg

[coverage]: https://codecov.io/github/vfile/vfile-reporter-pretty

[downloads-badge]: https://img.shields.io/npm/dm/vfile-reporter-pretty.svg

[downloads]: https://www.npmjs.com/package/vfile-reporter-pretty

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/vfile/vfile/discussions

[npm]: https://docs.npmjs.com/cli/install

[contributing]: https://github.com/vfile/.github/blob/HEAD/contributing.md

[support]: https://github.com/vfile/.github/blob/HEAD/support.md

[health]: https://github.com/vfile/.github

[coc]: https://github.com/vfile/.github/blob/HEAD/code-of-conduct.md

[license]: license

[author]: https://sindresorhus.com

[screenshot]: screenshot.png

[vfile]: https://github.com/vfile/vfile
