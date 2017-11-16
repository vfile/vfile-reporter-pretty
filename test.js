import test from 'ava';
import vfile from 'vfile';
import m from './';

/* https://github.com/sindresorhus/eslint-formatter-pretty/blob/159b30a/index.js#L90-L93 */
const cwd = process.env.CI ? '' : '\u001b]50;CurrentDir=' + process.cwd() + '\u0007';

test(t => {
	const file = vfile({path: '~/example.md'});

	file.message('`braavo` is misspelt; did you mean `bravo`?', {line: 1, column: 8});
	file.info('This is perfect', {line: 2, column: 1});

	try {
		file.fail('This is horrible', {line: 3, column: 5});
	} catch (err) {}

	t.is(
		m([file]),
		[
			'',
			cwd + '  \u001b[4m~/example.md\u001b[24m\u001b[8m\u001b[2m\u001b[90m:1:8\u001b[39m\u001b[22m\u001b[28m',
			'  \u001b[33m⚠\u001b[39m  \u001b[2m1\u001b[90m:\u001b[39m8\u001b[22m  \u001b[1mbraavo\u001b[22m is misspelt; did you mean \u001b[1mbravo\u001b[22m?  ',
			'  \u001b[33m⚠\u001b[39m  \u001b[2m2\u001b[90m:\u001b[39m1\u001b[22m  This is perfect                          ',
			'  \u001b[31m✖\u001b[39m  \u001b[2m3\u001b[90m:\u001b[39m5\u001b[22m  This is horrible                         ',
			'',
			'  \u001b[33m2 warnings\u001b[39m',
			'  \u001b[31m1 error\u001b[39m',
			''
		].join('\n')
	);
});
