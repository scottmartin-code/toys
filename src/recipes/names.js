export const names = {
	adjective: {
		items:  [ 'Cactus', 'General', 'Jolly', 'Smilin\'' ],
		space:  'after',
		chance: 20,
	},
	femaleName: {
		items: [ [ 'femaleFirstName', ' ', 'lastName' ] ],
	},
	maleName: {
		items: [
			[ 'adjective', 'maleFirstName', ' ', 'lastName', 'honorific' ],
			[
				'maleFirstName', ' ', 'middleInitialOrNickname', 'lastName',
				'honorific',
			],
		],
		rare: {
			chance: 75,
			items:  [
				[ '"Happy" ', 'maleFirstNameH', ' ', 'lastNameH' ],
			],
		},
	},
	femaleFirstName: {
		items: [
			[ 'femaleFirstNameA' ], [ 'femaleFirstNameB' ], [ 'femaleFirstNameC' ],
			[ 'femaleFirstNameD' ], [ 'femaleFirstNameE' ], [ 'femaleFirstNameG' ],
			[ 'femaleFirstNameH' ], [ 'femaleFirstNameI' ], [ 'femaleFirstNameJ' ],
			[ 'femaleFirstNameK' ], [ 'femaleFirstNameL' ], [ 'femaleFirstNameM' ],
			[ 'femaleFirstNameN' ], [ 'femaleFirstNameO' ], [ 'femaleFirstNameP' ],
			[ 'femaleFirstNameR' ], [ 'femaleFirstNameS' ], [ 'femaleFirstNameV' ],
		],
	},
	femaleFirstNameA: {
		items: [ 'Anita', 'Ann' ],
	},
	femaleFirstNameB: {
		items: [ 'Bessie' ],
	},
	femaleFirstNameC: {
		items: [ 'Carrie', 'Cindy', 'Connie' ],
	},
	femaleFirstNameD: {
		items: [ 'Dolly', 'Dorothy' ],
	},
	femaleFirstNameE: {
		items: [ 'Elizabeth', 'Ellen', 'Elsie', 'Ethel', 'Evelyn' ],
	},
	femaleFirstNameG: {
		items: [ 'Georgia', 'Ginny', 'Gloria' ],
	},
	femaleFirstNameH: {
		items: [ 'Helen' ],
	},
	femaleFirstNameI: {
		items: [ 'Irene' ],
	},
	femaleFirstNameJ: {
		items: [ 'Jane', 'June' ],
	},
	femaleFirstNameK: {
		items: [ 'Kelly', 'Kitty' ],
	},
	femaleFirstNameL: {
		items: [ 'Lauren', 'Louise', 'Lucy', 'Lynn' ],
	},
	femaleFirstNameM: {
		items: [
			'Margaret', 'Marie', 'Marion', 'Martha', 'Mary', 'Maxine',
			'Merline',
		],
	},
	femaleFirstNameN: {
		items: [ 'Nellie', 'Nora' ],
	},
	femaleFirstNameO: {
		items: [ 'Olive' ],
	},
	femaleFirstNameP: {
		items: [ 'Patsy' ],
	},
	femaleFirstNameR: {
		items: [ 'Rosetta', 'Rosy', 'Ruby' ],
	},
	femaleFirstNameS: {
		items: [ 'Sally', 'Shannon', 'Sibyl' ],
	},
	femaleFirstNameV: {
		items: [ 'Virginia', 'Vivian' ],
	},
	maleFirstName: {
		items: [
			[ 'maleFirstNameA' ], [ 'maleFirstNameB' ], [ 'maleFirstNameC' ],
			[ 'maleFirstNameD' ], [ 'maleFirstNameE' ], [ 'maleFirstNameF' ],
			[ 'maleFirstNameG' ], [ 'maleFirstNameH' ], [ 'maleFirstNameJ' ],
			[ 'maleFirstNameK' ], [ 'maleFirstNameL' ], [ 'maleFirstNameM' ],
			[ 'maleFirstNameO' ], [ 'maleFirstNameP' ], [ 'maleFirstNameR' ],
			[ 'maleFirstNameS' ], [ 'maleFirstNameT' ], [ 'maleFirstNameV' ],
			[ 'maleFirstNameW' ],
		],
	},
	maleFirstNameA: {
		items: [ 'Abbey', 'Albert', 'Arthur' ],
	},
	maleFirstNameB: {
		items: [ 'Bill', 'Bob', 'Bobby', 'Bud',	'Buddy', 'Bull Moose' ],
	},
	maleFirstNameC: {
		items: [ 'Carter', 'Clyde', 'Curly' ],
	},
	maleFirstNameD: {
		items: [ 'Donnie' ],
	},
	maleFirstNameE: {
		items: [ 'Earl', 'Eddie', 'Eddy', 'Edward', 'Edwin', 'Ernest' ],
	},
	maleFirstNameF: {
		items: [ 'Frank', 'Frankie', 'Fred', 'Freddie', 'Fritz' ],
	},
	maleFirstNameG: {
		items: [ 'Gene', 'George', 'Glen' ],
	},
	maleFirstNameH: {
		items: [ 'Hank', 'Hector', 'Henry', 'Hot Lips', 'Howard' ],
	},
	maleFirstNameJ: {
		items: [ 'Jack', 'James', 'John', 'Johnnie', 'Johnny' ],
	},
	maleFirstNameK: {
		items: [ 'Karl' ],
	},
	maleFirstNameL: {
		items: [ 'Louis', 'Lowell' ],
	},
	maleFirstNameM: {
		items: [ 'Mickey', 'Mitchell' ],
	},
	maleFirstNameO: {
		items: [ 'Ollie', 'Oscar' ],
	},
	maleFirstNameP: {
		items: [ 'Pee Wee' ],
	},
	maleFirstNameR: {
		items: [ 'Ray', 'Red', 'Robin', 'Roger', 'Rusty' ],
	},
	maleFirstNameS: {
		items: [ 'Sammy', 'Scotty', 'Seymour', 'Smokey', 'Sonny', 'Stuff' ],
	},
	maleFirstNameT: {
		items: [ 'Tab', 'Ted', 'Thomas', 'Tiny' ],
	},
	maleFirstNameV: {
		items: [ 'Vaughn' ],
	},
	maleFirstNameW: {
		items: [ 'Walter', 'Wayne', 'Wendell', 'Wilbert', 'Willie', 'Wilson' ],
	},
	middleInitialOrNickname: {
		items: [
			'A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'I.', 'J.', 'K.',
			'L.', 'M.', 'N.', 'O.', 'P.', 'Q.', 'R.', 'S.', 'T.', 'U.', 'V.',
			'W.', 'X.', 'Y.', 'Z.', '"Finkelschnitz"', '"Red"', '"Scat"',
			'"Stomp"',
		],
		space:  'after',
		chance: 27,
	},
	lastName: {
		items: [
			[ 'lastNameA' ],
			[ 'lastNameB' ],
			[ 'lastNameC' ],
			[ 'lastNameD' ],
			[ 'lastNameF' ],
			[ 'lastNameG' ],
			[ 'lastNameH' ],
			[ 'lastNameJ' ],
			[ 'lastNameL' ],
			[ 'lastNameM' ],
			[ 'lastNameP' ],
			[ 'lastNameR' ],
			[ 'lastNameS' ],
			[ 'lastNameT' ],
			[ 'lastNameW' ],
		],
	},
	lastNameA: {
		items: [
			'Adair', 'Adams', 'Allen', 'Ayres',
		],
	},
	lastNameB: {
		items: [
			'Balmer', 'Baranco', 'Baur', 'Bechet', 'Brown', 'Bostic', 'Burke',
		],
	},
	lastNameC: {
		items: [
			'Carlson', 'Cletro', 'Crayton', 'Crosby', 'Costa',
		],
	},
	lastNameD: {
		items: [
			'Dixon',
		],
	},
	lastNameF: {
		items: [
			'Fox', 'Fuller',
		],
	},
	lastNameG: {
		items: [
			'Gershwin', 'Gray',
		],
	},
	lastNameH: {
		items: [
			'Hall', 'Heier',
		],
	},
	lastNameJ: {
		items: [
			'Jackson', 'Jenkins', 'Johnson', 'Jordan',
		],
	},
	lastNameK: {
		items: [
			'Kahn', 'Kaufman', 'Kaye', 'Kent', 'King', 'Kreisler', 'Kryger',
		],
	},
	lastNameL: {
		items: [
			'Lane', 'Lewis',
		],
	},
	lastNameM: {
		items: [
			'Maddox', 'McCoy', 'McDonald', 'McGee', 'McKinley', 'McPartland',
			'Melton', 'Miller', 'Monroe', 'Mooney',
		],
	},
	lastNameP: {
		items: [
			'Powers', 'Pryor',
		],
	},
	lastNameR: {
		items: [
			'Russels',
		],
	},
	lastNameS: {
		items: [
			'Schneider', 'Simms', 'Short', 'Smith', 'Snow', 'Sparrow', 'Swift',
		],
	},
	lastNameT: {
		items: [
			'Tharpe',
		],
	},
	lastNameW: {
		items: [
			'Williams', 'Worth',
		],
	},
	honorific: {
		items: [
			'"The King of the Polkas"',
			[ '"The ', 'honorificAdjective', ' ', 'honorificNoun', '"' ],
		],
		space:  'before',
		chance: 30,
	},
	honorificAdjective: {
		items: [
			'Crooning', 'Singing', 'Southern', 'Whispering',
		],
	},
	honorificNoun: {
		items: [
			'Cornetist', 'Drummer', 'Gentleman', 'Ranger', 'Troubador',
		],
	},
}
