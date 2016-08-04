import test from 'ava';
import remark from 'remark';
import remarkLint from 'remark-lint';
import m from './';

test(t => {
	const output = m([remark().use(remarkLint).process('## Hello world!')]);
	console.log(output);
	t.regex(output, /⚠/);
});
