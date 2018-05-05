# vfile-reporter-pretty [![Build Status](https://travis-ci.org/vfile/vfile-reporter-pretty.svg?branch=master)](https://travis-ci.org/vfile/vfile-reporter-pretty)

> Pretty reporter for [VFile](https://github.com/vfile/vfile)

For example, get pretty output from [remark-lint](https://github.com/wooorm/remark-lint).

![](screenshot.png)


## Install

```
$ npm install vfile-reporter-pretty
```


## Usage

```js
const vfile = require('vfile');
const vfileReporterPretty = require('vfile-reporter-pretty');

const file = vfile({path: '~/example.md'});

file.message('`braavo` is misspelt; did you mean `bravo`?', {line: 1, column: 8});
file.info('This is perfect', {line: 2, column: 1});

try {
	file.fail('This is horrible', {line: 3, column: 5});
} catch (err) {}

console.log(vfileReporterPretty([file]));
```


## Contribute

See [`contributing.md` in `vfile/vfile`](https://github.com/vfile/vfile/blob/master/contributing.md) for ways to get started.

This organisation has a [Code of Conduct](https://github.com/vfile/vfile/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community, you agree to abide by its terms.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
