import test from 'ava';
import m from '.';

test(t => {
	t.is(m('\nunicorn\n'), 0);
	t.is(m('\n  unicorn\n'), 2);
	t.is(m('\t\t<!doctype html>\n\t\t<html>\n\t\t\t<body>\n\n\n\n\t\t\t\t<h1>Hello world!</h1>\n\t\t\t</body>\n\t\t</html>'), 2);
	t.is(m('\n\t\n\t\tunicorn\n\n\n\n\t\t\tunicorn'), 2, 'ignore whitespace only lines');
});
