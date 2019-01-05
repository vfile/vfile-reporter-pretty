import path from 'path'
import test from 'ava'
import vfile from 'vfile'
import symbols from 'log-symbols'
import chalk from 'chalk'
import m from '.'

// https://github.com/sindresorhus/eslint-formatter-pretty/blob/159b30a/index.js#L90-L93
const cwd = process.env.CI ? '' : `\u001B]50;CurrentDir=${process.cwd()}\u0007`

test(t => {
  const fp = path.join('~', 'example.md')
  const file = vfile(fp)

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
  } catch (error) {}

  t.is(
    m([file]),
    [
      '',
      cwd + '  ' + chalk.underline(fp) + chalk.hidden.dim.gray(':5:3'),
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
})
