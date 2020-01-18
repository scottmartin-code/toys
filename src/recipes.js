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

const recipes = {
	bandName: {
		items: [
			[ 'leaderPossessiveOrThe', 'bandLabel' ],
		],
	},
	leaderPossessiveOrThe: {
		items: [
			[ 'leaderSingularPossessive' ],
			[ 'leaders', ' and their ' ],
			[ 'The ' ],
		],
	},
	leaderSingularPossessive: {
		items: [
			[ 'femaleLeaderAndHer' ],
			[ 'maleLeaderAndHis' ],
			[ 'lastName', '\'s ' ],
			[ 'leaderName', '\'s ' ],
			[ 'leaderName', ' and the ' ],
			[ 'leaderName', ' with the ' ],
		],
	},
	femaleLeaderAndHer: {
		items: [
			[ 'femaleLeaderName', ' and her ' ],
		],
	},
	maleLeaderAndHis: {
		items: [
			[ 'maleLeaderName', ' and his ' ],
		],
	},
	leaders: {
		items: [
			[ 'maleLeaderName', ' and ', 'maleLeaderName' ],
			[ 'maleFirstName', ' and ', 'maleLeaderName' ],
			[ 'femaleFirstName', ' and ', 'femaleLeaderName' ],
			[ 'lastName', ' and ', 'lastName' ],
			[ 'The ', 'lastName', ' Brothers' ],
			[ 'The ', 'lastName', ' Sisters' ],
			[ 'The King\'s Jesters' ],
		],
	},
	leaderName: {
		items: [ [ 'maleLeaderName' ], [ 'femaleLeaderName' ] ],
	},
	femaleLeaderName: {
		items: [ [ 'femaleFirstName', ' ', 'lastName' ] ],
	},
	maleLeaderName: {
		items: [
			[ 'adjective', 'maleFirstName', ' ', 'lastName', 'honorific' ],
			[
				'maleFirstName', ' ', 'middleInitialOrNickname', 'lastName',
				'honorific',
			],
		],
	},
	adjective: {
		items:  [ 'Cactus', 'General', 'Jolly', 'Smilin\'' ],
		space:  'after',
		chance: 20,
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
	instrument: {
		items: [
			'Clarinet', 'Guitar', 'Jug', 'Trombone', 'Trumpet',
		],
	},
	alliterativeBand: {
		items: [
			[ 'lastNameB', '\'s ', 'memberNounsB' ],
			[ 'lastNameC', '\'s ', 'memberNounsC' ],
			[ 'lastNameD', '\'s ', 'memberNounsD' ],
			[ 'lastNameF', '\'s ', 'memberNounsF' ],
			[ 'lastNameG', '\'s ', 'memberNounsG' ],
			[ 'lastNameH', '\'s ', 'memberNounsH' ],
			[ 'lastNameM', '\'s ', 'memberNounsM' ],
			[ 'lastNameP', '\'s ', 'memberNounsP' ],
			[ 'lastNameR', '\'s ', 'memberNounsR' ],
			[ 'lastNameS', '\'s ', 'memberNounsS' ],
			[ 'lastNameT', '\'s ', 'memberNounsT' ],
			[ 'lastNameW', '\'s ', 'memberNounsW' ],
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
	place: {
		items: [
			'Beaver Valley', 'Buffalo', 'Casa Loma', 'Campus', 'City',
			'Club Maurice', 'Colorado', 'Cumberland', 'Farm', 'Friars Inn',
			'Georgia', 'Goosetown', 'Grand Canyon', 'Goosetown', 'Hollywood',
			'Hotel Astor', 'Kansas City', 'Kentucky', 'Louisiana', 'Manhattan',
			'Michigan', 'Motor City', 'Mound City', 'Nankin', 'New Orleans',
			'Oklahoma', 'Pecos River', 'Pennsylvania', 'Prairie', 'Quaker City',
			'Red River', 'Rocky Road', 'Santa Fe', 'Shadyside', 'Smoky Mountain',
			'Tennessee', 'Texas', 'Valley',
		],
	},
	instrumentOptional: {
		items:  [ 'Jug', 'Marimba', 'Saxophone', 'Tympany' ],
		space:  'after',
		chance: 20,
	},
	bandNumeric: {
		items: [
			'Band', 'Ensemble', 'Five', 'Trio', 'Quartet', 'Quartette',
			'Quintet', 'Sax-O-Tette', 'Sextet', 'Strings', 'Symphonette',
		],
	},
	memberNounPrefix: {
		items: [
			'All Star', 'Barn Dance', 'Bashful', 'Bearcats', 'Black and White',
			'Blue Denim', 'Blue Grass', 'Boogie Woogie', 'Boulevard',
			'Buster Brown', 'Cabin', 'Cactus', 'Cool', 'Cowboy', 'Crazy',
			'Dependable', 'Dixie Lily', 'Famous', 'Happiness', 'Hoosier', 'Hot',
			'Hot Box', 'House', 'Jazz', 'Jolly', 'Jungle', 'Lucky', 'Master',
			'Melody', 'Moana', 'Musical', 'Old Hickory', 'Original', 'Novelty',
			'Peerless', 'Pick-A-Rib', 'Polka', 'Radio', 'Rainbow', 'Rambling',
			'Rhythm', 'Round Up', 'Royal', 'Skyline', 'Statler', 'Swinging',
			'Tailgate', 'Tivoli', 'Torrid', 'Varsity', 'Western',
		],
	},
	memberNounNumericPrefix: {
		items: [ 'Three', 'Four', 'Five', 'Six', 'Seven' ],
	},
	memberNouns: {
		items: [
			[ 'memberNounsB' ],
			[ 'memberNounsC' ],
			[ 'memberNounsD' ],
			[ 'memberNounsF' ],
			[ 'memberNounsG' ],
			[ 'memberNounsH' ],
			[ 'memberNounsI' ],
			[ 'memberNounsJ' ],
			[ 'memberNounsK' ],
			[ 'memberNounsM' ],
			[ 'memberNounsP' ],
			[ 'memberNounsR' ],
			[ 'memberNounsS' ],
			[ 'memberNounsT' ],
			[ 'memberNounsV' ],
			[ 'memberNounsW' ],
			[ 'memberNounsY' ],
		],
	},
	memberNounsB: {
		items: [
			'Babies', 'Band', 'Be-Boppers', 'Blazers', 'Blue-Blowers',
			'Bluesicians', 'Bob Cats', 'Bohemians', 'Bombadiers', 'Boys',
			'Briarhoppers',
		],
	},
	memberNounsC: {
		items: [
			'Canadians', 'Caravan', 'Caroleers', 'Cats', 'Cats and Jammers',
			'Chicagoans', 'Clodhoppers', 'Colonels', 'Cornellians', 'Cowboys',
			'Cowhands', 'Crazy Tennesseans',
		],
	},
	memberNounsD: {
		items: [
			'Dance Makers', 'Debs', 'Diamonds', 'Dixielanders', 'Dude Ranchers',
			'Dukes',
		],
	},
	memberNounsF: {
		items: [
			'Feetwarmers',
		],
	},
	memberNounsG: {
		items: [
			'Gang', 'Girls', 'Girls of the Golden West', 'Globe Trotters',
		],
	},
	memberNounsH: {
		items: [
			'Hawaiians', 'Highpointers', 'Hillbillies', 'Hounds', 'Hunters',
		],
	},
	memberNounsI: {
		items: [
			'Islanders',
		],
	},
	memberNounsJ: {
		items: [
			'Jesters',
		],
	},
	memberNounsK: {
		items: [
			'Knights',
		],
	},
	memberNounsM: {
		items: [
			'Melody Makers', 'Merry Madcaps', 'Merrymakers', 'Millers',
			'Millionaires of Rhythm', 'Music', 'Music Box Band',
		],
	},
	memberNounsP: {
		items: [
			'Pardners', 'Pennsylvanians', 'Plainsmen', 'Polkateers',
			'Pricklypears',
		],
	},
	memberNounsR: {
		items: [
			'Ramblers', 'Ranch Boys', 'Rangers', 'Rascals', 'Rhythmasters',
			'Rhythmists', 'Riders', 'Ridge Runners', 'Rockers', 'Rogues',
			'Rounders',
		],
	},
	memberNounsS: {
		items: [
			'Sagedusters', 'Serenaders', 'Singers', 'Slickers',
			'Sons of the Golden West', 'Stompers', 'String Band', 'Strings',
			'Sweethearts', 'Swing Wing', 'Swingsters', 'Syncopaters',
		],
	},
	memberNounsT: {
		items: [
			'Tennesseans', 'Texsons', 'Tornadoes', 'Troopers', 'Tu-Tones',
			'Twisters',
		],
	},
	memberNounsV: {
		items: [
			'Vagabonds',
		],
	},
	memberNounsW: {
		items: [
			'Westerners', 'Wranglers',
		],
	},
	memberNounsY: {
		items: [
			'Yanks',
		],
	},
	siblings: {
		items: [ 'Brothers', 'Sisters' ],
	},
	orchestra: {
		items: [
			[
				'place', ' ', 'orchestraSpecialty', 'Orchestra',
				'orchestraSuffix',
			],
			[ 'place', ' ', 'Orchestra', 'orchestraSuffix' ],
			[ 'orchestraSpecialty', 'Orchestra', 'orchestraSuffix' ],
		],
	},
	orchestraSpecialty: {
		items: [
			[ 'orchestraSpecialtyPrefix', 'orchestraSpecialtyMain' ],
		],
	},
	orchestraSpecialtyPrefix: {
		items: [
			'Arcadia Peacock', 'Benson', 'Continental', 'Elite',
			'Hotel Astor', 'Hour of Charm', 'International', 'Jazzarimba',
			'Million Dollar', 'Party Dance', 'Royal', 'Specialty', 'Victor',
		],
		space:  'after',
		chance: 5,
	},
	orchestraSpecialtyMain: {
		items: [
			'All-Girl', 'Cafe', 'Calypso', 'Concert', 'Dance', 'Folk',
			'Hilo Hawaiian', 'Pier', 'Rainbo', 'Salon', 'Waltz',
		],
		space:  'after',
		chance: 5,
	},
	orchestraSuffix: {
		items: [
			'and Choir', 'De Luxe',
		],
		space:  'before',
		chance: 10,
	},
}

module.exports = recipes
