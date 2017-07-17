# vfile-reporter-pretty [![Build Status](https://travis-ci.org/sindresorhus/vfile-reporter-pretty.svg?branch=master)](https://travis-ci.org/sindresorhus/vfile-reporter-pretty)

> Pretty reporter for [VFile](https://github.com/vfile/vfile)

For example, get pretty output from [remark-lint](https://github.com/wooorm/remark-lint).

![](screenshot.png)


## Install

```
$ npm install --save vfile-reporter-pretty
```


## Usage

```js
const remark = require('remark');
const remarkLint = require('remark-lint');
const vfileReporterPretty = require('vfile-reporter-pretty');

const vfile = remark().use(remarkLint).process('## Hello world!');

console.log(vfileReporterPretty([vfile]));
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
