export const base = {
	bandName: {
		items: [
			[ 'leaderPossessiveOrThe', 'bandLabel' ],
		],
		rare: {
			chance: 50,
			items:  [
				[ 'femaleLeaderAndHer', 'instrument' ],
				[ 'maleLeaderAndHis', 'instrument' ],
				[ 'leaderSingularPossessive', ' Original ', 'bandLabel' ],
				[ 'leaderName', ' with string band' ],
				[ 'alliterativeBand' ],
				[ 'number', ' ', 'lastName', ' ', 'siblings' ],
			],
		},
	},
	bandLabel: {
		items: [
			[ 'memberNouns' ],
			[ 'memberNounPrefix', ' ', 'memberNouns' ],
			[ 'place', ' ', 'memberNounPrefix', ' ', 'memberNouns' ],
			[ 'place', ' ', 'memberNouns' ],
			[ 'number', ' ', 'memberNouns' ],
			[ 'memberNounPrefix', ' ', 'bandNumeric' ],
			[ 'instrumentOptional', 'bandNumeric' ],
			[ 'bandNumeric' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
		],
		rareItems: [
			[ 'Big ', 'number' ],
		],
	},
	instrument: {
		items: [
			'Clarinet', 'Guitar', 'Jug', 'Trombone', 'Trumpet',
		],
	},
}
