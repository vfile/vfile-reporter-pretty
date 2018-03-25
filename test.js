import test from 'ava';
import vfile from 'vfile';
import m from '.';

// https://github.com/sindresorhus/eslint-formatter-pretty/blob/159b30a/index.js#L90-L93
const cwd = process.env.CI ? '' : `\u001B]50;CurrentDir=${process.cwd()}\u0007`;

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
			cwd + '  \u001B[4m~/example.md\u001B[24m\u001B[8m\u001B[2m\u001B[90m:1:8\u001B[39m\u001B[22m\u001B[28m',
			'  \u001B[33m⚠\u001B[39m  \u001B[2m1\u001B[90m:\u001B[39m8\u001B[22m  \u001B[1mbraavo\u001B[22m is misspelt; did you mean \u001B[1mbravo\u001B[22m?  ',
			'  \u001B[33m⚠\u001B[39m  \u001B[2m2\u001B[90m:\u001B[39m1\u001B[22m  This is perfect                          ',
			'  \u001B[31m✖\u001B[39m  \u001B[2m3\u001B[90m:\u001B[39m5\u001B[22m  This is horrible                         ',
			'',
			'  \u001B[33m2 warnings\u001B[39m',
			'  \u001B[31m1 error\u001B[39m',
			''
		].join('\n')
	);
});
