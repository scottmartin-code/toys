/*

TODO: The following to appear infrequently
[ 'memberNounNumericPrefix', ' ', 'lastName', ' ', 'siblings' ],
[ 'alliterativeBand' ],
[ 'femaleLeaderAndHer', 'instrument' ],
[ 'maleLeaderAndHis', 'instrument' ],
[ 'leaderSingularPossessive', ' Original ', 'bandLabel' ]
[ 'leaderName', ' with string band']

TODO: orchestraSpecialtyPrefix -> specialtyPrefix
TODO: X Orchestra of <place>

*/

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
	},
	bandLabel: {
		items: [
			[ 'memberNouns' ],
			[ 'memberNounPrefix', ' ', 'memberNouns' ],
			[ 'place', ' ', 'memberNounPrefix', ' ', 'memberNouns' ],
			[ 'place', ' ', 'memberNouns' ],
			[ 'memberNounNumericPrefix', ' ', 'memberNouns' ],
			[ 'memberNounPrefix', ' ', 'bandNumeric' ],
			[ 'instrumentOptional', 'bandNumeric' ],
			[ 'bandNumeric' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
		],
	},
	instrument: { // Not in use yet
		items: [
			'Clarinet', 'Guitar', 'Jug', 'Trombone', 'Trumpet',
		],
	},
}

export const recipes = Object.assign(base, leader, names, band, orchestra, place)
