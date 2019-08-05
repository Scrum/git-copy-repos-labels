import test from 'ava';
import gitCopyReposLabels from './index';

test('pkg is function', t => {
	t.is(typeof gitCopyReposLabels, 'function');
});