import { band }      from './recipes/band.js'
import { leader }    from './recipes/leader.js'
import { names }     from './recipes/names.js'
import { orchestra } from './recipes/orchestra.js'
import { place }     from './recipes/place.js'

const base = {
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

export const recipes = Object.assign(base, leader, names, band, orchestra, place)
