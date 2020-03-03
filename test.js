var path = require('path')
var test = require('tape')
var vfile = require('vfile')
var symbols = require('log-symbols')
var chalk = require('chalk')
var pretty = require('.')

// https://github.com/sindresorhus/eslint-formatter-pretty/blob/159b30a/index.js#L90-L93
var cwd = process.env.CI ? '' : `\u001B]50;CurrentDir=${process.cwd()}\u0007`

test('main', function(t) {
  var fp = path.join('~', 'example.md')
  var file = vfile({path: fp})

  file.info('This is perfect', {line: 5, column: 3}, 'alpha:bravo')

  file.message('This should be fixed', {
    start: {line: 3, column: 5},
    end: {line: 3, column: 7}
  })

  try {
    file.fail('This is horrible', {
      type: 'charlie',
      value: 'bravo',
      position: {
        start: {line: 2, column: 1},
        end: {line: 2, column: 8}
      }
    })
  } catch (_) {}

  t.is(
    pretty([file]),
    [
      '',
      cwd + '  ' + chalk.underline(fp) + chalk.hidden.dim.gray(':2:1'),
      '  ' +
        symbols.warning +
        '  ' +
        chalk.dim('3' + chalk.gray(':') + '5') +
        '  This should be fixed  ',
      '  ' +
        symbols.warning +
        '  ' +
        chalk.dim('5' + chalk.gray(':') + '3') +
        '  This is perfect       ' +
        chalk.dim('alpha:bravo'),
      '  ' +
        symbols.error +
        '  ' +
        chalk.dim('2' + chalk.gray(':') + '1') +
        '  This is horrible      ',
      '',
      '  ' + chalk.yellow('2 warnings'),
      '  ' + chalk.red('1 error'),
      ''
    ].join('\n')
  )

  t.end()
})
