const { bandName } = require('../src/BandName');

test('Produce a band name', () => {
	const bandNameRegExp = new RegExp(/(?:["\w]+\.?\'?s?\s)+(?:[\w-]+)?/);
	let bandNameOutput = bandName();
	let match = bandNameRegExp.test(bandNameOutput);
	expect(match).toBe(true);
});
