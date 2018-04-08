const recipes = {
	bandName: {
		items: [ [ 'leaderOrLeadersPossessive', 'bandLabel' ] ],
	},
	leaderOrLeadersPossessive: {
		items: [
			[ 'leaderAndHis' ],
			[ 'leaderAndHer' ],
			[ 'leaders', ' and their ' ],
			[ 'leaderName', ' and the ' ],
		],
	},
	leaderAndHer: {
		items: [
			[ 'femaleLeaderName', ' and her ' ],
			[ 'femaleLeaderName', '\'s ' ],
		],
	},
	leaderAndHis: {
		items: [
			[ 'maleLeaderName', ' and his ' ],
			[ 'maleLeaderName', '\'s ' ],
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
			'Carter', 'Clyde', 'Donnie', 'Eddie', 'Edward', 'Edwin', 'Earl',
			'Frank', 'Fred', 'Gene', 'George', 'Glen', 'Hank', 'Hector',
			'Henry', 'Howard', 'Jack', 'James', 'John', 'Johnnie', 'Johnny',
			'Karl', 'Louis', 'Lowell', 'Mitchell', 'Ollie', 'Oscar',
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
			'Adair', 'Adams', 'Allen', 'Ayres', 'Balmer', 'Baranco', 'Baur',
			'Bechet', 'Brown', 'Bostic', 'Burke', 'Carlson', 'Cletro',
			'Crayton', 'Crosby', 'Costa', 'Dixon', 'Fox', 'Fuller',
			'Gershwin', 'Gray', 'Hall', 'Heier', 'Jackson', 'Jenkins',
			'Johnson', 'Jordan', 'Kahn', 'Kaufman', 'Kaye', 'Kent', 'King',
			'Kreisler', 'Kryger', 'Lane', 'Lewis', 'Maddox', 'McCoy',
			'McDonald', 'McGhee', 'McKinley', 'McPartland', 'Melton',
			'Miller', 'Monroe', 'Mooney', 'Powers', 'Pryor', 'Russels',
			'Schneider', 'Simms', 'Short', 'Smith', 'Snow', 'Sparrow',
			'Swift', 'Tharpe', 'Williams', 'Worth',
		],
	},
	honorific: {
		items: [ '"King of the Polkas"', '"The Crooning Troubador"' ],
		space: 'before',
		chance: 30,
	},
	bandLabel: {
		items: [
			[ 'memberNouns' ],
			[ 'memberNounPrefix', ' ', 'memberNouns' ],
			[ 'place', ' ', 'memberNounPrefix', ' ', 'memberNouns' ],
			[ 'place', ' ', 'memberNouns' ],
			[ 'memberNounNumericPrefix', ' ', 'memberNouns' ],
			[ 'memberNounPrefix', ' ', 'bandNumeric' ],
			[ 'instrument', 'bandNumeric' ],
			[ 'bandNumeric' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
		],
	},
	place: {
		items: [
			'Beaver Valley', 'Casa Loma', 'Campus', 'City', 'Colorado',
			'Farm', 'Grand Canyon', 'Hollywood', 'Louisiana', 'Michigan',
			'Motor City', 'Mound City', 'New Orleans', 'Pecos River',
			'Prairie', 'Red River', 'Santa Fe', 'Smoky Mountain', 'Texas',
			'Valley',
		],
	},
	instrument: {
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
			'All Star', 'Barn Dance', 'Bashful', 'Black and White',
			'Blue Grass', 'Boogie Woogie', 'Boulevard', 'Buster Brown',
			'Cabin', 'Cactus', 'Cool', 'Cowboy', 'Dependable', 'Dixie Lily',
			'Famous', 'Fox', 'Happiness', 'Hot', 'Hot Box', 'House', 'Jazz',
			'Jolly', 'Jungle', 'Master', 'Melody', 'Moana', 'Musical',
			'Novelty', 'Peerless', 'Polka', 'Radio', 'Rambling', 'Rhythm',
			'Round Up', 'Royal', 'Statler', 'Tivoli', 'Varsity',
		],
	},
	memberNounNumericPrefix: {
		items: [ 'Three', 'Four', 'Five', 'Six', 'Seven' ],
	},
	memberNouns: {
		items: [
			'Band', 'Blazers', 'Blue-Blowers', 'Bob Cats', 'Bohemians',
			'Bombadiers', 'Boys', 'Briarhoppers', 'Canadians', 'Caroleers',
			'Cats', 'Chicagoans', 'Cornellians', 'Cowboys', 'Debs',
			'Dude Ranchers', 'Feetwarmers', 'Gang', 'Girls',
			'Girls of the Golden West', 'Hawaiians', 'Highpointers',
			'Hillbillies', 'Hounds', 'Hunters', 'Islanders', 'Stompers',
			'Knights', 'Melody Makers', 'Millers', 'Pennsylvanians',
			'Plainsmen', 'Ramblers', 'Rangers', 'Rascals', 'Rhythmasters',
			'Rhythmists', 'Riders', 'Rockers', 'Rogues', 'Rounders',
			'Slickers', 'Sons of the Golden West', 'Sweethearts', 'Swing Wing',
			'Syncopaters', 'Tornadoes', 'Troopers', 'Twisters', 'Vagabonds',
			'Westerners', 'Wranglers', 'Yanks',
		],
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
		items: [ 'International', 'Specialty' ],
		space: 'after',
		chance: 5,
	},
	orchestraSpecialtyMain: {
		items: [ 'Dance', 'Concert', 'Folk' ],
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
