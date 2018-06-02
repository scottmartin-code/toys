const recipes = {
	bandName: {
		items: [
			[ 'leaderPossessiveOrThe', 'bandLabel' ],
			// The following to appear infrequently
			// [ 'memberNounNumericPrefix', ' ', 'lastName', ' ', 'siblings' ],
			// [ 'alliterativeBand' ],
			// [ 'femaleLeaderAndHer', 'instrument' ],
			// [ 'maleLeaderAndHis', 'instrument' ],
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
	maleLeaderName: {
		items: [
			[ 'adjective', 'maleFirstName', ' ', 'lastName', 'honorific' ],
			[
				'maleFirstName', ' ', 'middleInitialOrNickname', 'lastName',
				'honorific',
			],
		],
	},
	femaleLeaderName: {
		items: [ [ 'femaleFirstName', ' ', 'lastName' ] ],
	},
	adjective: {
		items: [ 'Jolly', 'Smilin\'', 'General' ],
		space: 'after',
		chance: 20,
	},
	maleFirstName: {
		items: [
			'Abbey', 'Albert', 'Arthur', 'Bill', 'Bob', 'Bobby', 'Buddy',
			'Bull Moose', 'Carter', 'Clyde', 'Donnie', 'Eddie', 'Edward',
			'Edwin', 'Earl', 'Frank', 'Fred', 'Gene', 'George', 'Glen', 'Hank',
			'Hector', 'Henry', 'Howard', 'Jack', 'James', 'John', 'Johnnie',
			'Johnny', 'Karl', 'Louis', 'Lowell', 'Mitchell', 'Ollie', 'Oscar',
			'Pee Wee', 'Ray', 'Red', 'Robin', 'Roger', 'Rusty', 'Sammy',
			'Scotty', 'Seymour', 'Sonny', 'Stuff', 'Tab', 'Ted', 'Thomas',
			'Vaughn', 'Walter', 'Wayne', 'Wendell', 'Wilbert', 'Willie',
			'Wilson',
		],
	},
	femaleFirstName: {
		items: [
			'Anita', 'Bessie', 'Carrie', 'Connie', 'Ellen', 'Ginny', 'Gloria',
			'Helen', 'June', 'Kitty', 'Louise', 'Margaret', 'Marie', 'Marion',
			'Martha', 'Mary', 'Maxine', 'Nellie', 'Olive', 'Rosetta', 'Ruby',
			'Shannon', 'Virginia', 'Vivian',
		],
	},
	middleInitialOrNickname: {
		items: [
			'A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'I.', 'J.', 'K.',
			'L.', 'M.', 'N.', 'O.', 'P.', 'Q.', 'R.', 'S.', 'T.', 'U.', 'V.',
			'W.', 'X.', 'Y.', 'Z.', '"Red"', '"Scat"',
		],
		space: 'after',
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
		space: 'before',
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
			'Club Maurice', 'Colorado', 'Farm', 'Georgia', 'Grand Canyon',
			'Hollywood', 'Kentucky', 'Louisiana', 'Michigan', 'Motor City',
			'Mound City', 'New Orleans', 'Pecos River', 'Prairie', 'Red River',
			'Santa Fe', 'Shadyside', 'Smoky Mountain', 'Texas', 'Valley',
		],
	},
	instrumentOptional: {
		items: [ 'Jug', 'Marimba', 'Saxophone', 'Tympany' ],
		space: 'after',
		chance: 20,
	},
	bandNumeric: {
		items: [
			'Band', 'Ensemble', 'Five', 'Trio', 'Quartet', 'Quartette',
			'Quintet', 'Sax-O-Tette', 'Sextet', 'Symphonette',
		],
	},
	memberNounPrefix: {
		items: [
			'All Star', 'Barn Dance', 'Bashful', 'Bearcats', 'Black and White',
			'Blue Grass', 'Boogie Woogie', 'Boulevard', 'Buster Brown',
			'Cabin', 'Cactus', 'Cool', 'Cowboy', 'Dependable', 'Dixie Lily',
			'Famous', 'Happiness', 'Hot', 'Hot Box', 'House', 'Jazz',
			'Jolly', 'Jungle', 'Lucky', 'Master', 'Melody', 'Moana', 'Musical',
			'Novelty', 'Peerless', 'Polka', 'Radio', 'Rainbow', 'Rambling',
			'Rhythm', 'Round Up', 'Royal', 'Statler', 'Tivoli', 'Varsity',
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
			'Band', 'Be-Boppers', 'Blazers', 'Blue-Blowers', 'Bluesicians',
			'Bob Cats', 'Bohemians', 'Bombadiers', 'Boys', 'Briarhoppers',
		],
	},
	memberNounsC: {
		items: [
			'Canadians', 'Caroleers', 'Cats', 'Chicagoans', 'Clodhoppers',
			'Colonels', 'Cornellians', 'Cowboys', 'Cowhands',
		],
	},
	memberNounsD: {
		items: [
			'Debs', 'Diamonds', 'Dixielanders', 'Dude Ranchers',
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
	memberNounsK: {
		items: [
			'Knights',
		],
	},
	memberNounsM: {
		items: [
			'Melody Makers', 'Millers',
		],
	},
	memberNounsP: {
		items: [
			'Pennsylvanians', 'Plainsmen', 'Polkateers',
		],
	},
	memberNounsR: {
		items: [
			'Ramblers', 'Ranch Boys', 'Rangers', 'Rascals', 'Rhythmasters',
			'Rhythmists', 'Riders', 'Rockers', 'Rogues', 'Rounders',
		],
	},
	memberNounsS: {
		items: [
			'Serenaders', 'Slickers', 'Sons of the Golden West', 'Stompers',
			'Sweethearts', 'Swing Wing', 'Syncopaters',
		],
	},
	memberNounsT: {
		items: [
			'Texsons', 'Tornadoes', 'Troopers', 'Twisters',
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
		items: [ 'International', 'Royal', 'Specialty' ],
		space: 'after',
		chance: 5,
	},
	orchestraSpecialtyMain: {
		items: [ 'Calypso', 'Dance', 'Concert', 'Folk' ],
		space: 'after',
		chance: 5,
	},
	orchestraSuffix: {
		items: [ 'De Luxe' ],
		space: 'before',
		chance: 10,
	},
};

module.exports = recipes;
