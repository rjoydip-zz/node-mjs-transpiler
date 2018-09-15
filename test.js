import test from 'ava';

test('Node Mjs Transpile sayHello', t => {
	t.is(require('./lib').sayHello('unicorns'), 'Hello unicorns');
});
