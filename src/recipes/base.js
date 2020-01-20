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
		extraRare: {
			chance: 100,
			items:  [
				[
					'Happy ', 'lastName', 'singularPossessiveUngendered',
					'Happy-Go-Lucky ', 'memberNounsH',
				],
				[
					'Rocky ', 'lastName', 'singularPossessiveUngendered',
					'Rocky Road ', 'memberNounsR',
				],
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
}
