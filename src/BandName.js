module.exports.bandName = bandName;

const BEFORE = 1;
const AFTER = 2;

function randomItem () {
	let items = [...arguments];

	return items[Math.floor(Math.random() * items.length)];
}

function itemChance () {
	let chanceItems = [...arguments];
	let unsuccessful = chanceItems.pop() - 1;
	let spaceMode = chanceItems.pop();

	for (let i = 0; i < chanceItems.length; i++) {
		if (spaceMode == BEFORE) {
			chanceItems[i] = ' ' + chanceItems[i];
		} else {
			chanceItems[i] += ' ';
		}
	};

	chanceItems.push(...emptyItems(unsuccessful));
	return chanceItems;
}

function emptyItems (number) {
	let items = [];
	for (let i = 1; i < number; i++) {
		items.push('');
	}
	return items;
}

function bandName () {
	return randomItem(
		leaderOrLeadersPossessive() + bandLabel(),
		leaderOrLeadersPossessive() + bandLabel(),
		leaderOrLeadersPossessive() + bandLabel(),
		maleLeaderName() + ' and the ' + memberNouns(),
		femaleLeaderName() + ' and the ' + memberNouns()
	);
}

function leaderOrLeadersPossessive () {
	return randomItem(
		leaderAndHis(),
		leaderAndHer(),
		leadersAndTheir()
	);
}

function leaderAndHer () {
	return femaleFirstName() + ' ' + lastName()
		+ randomItem(' and her ', '\'s ');
}

function leaderAndHis () {
	return maleLeaderName() + randomItem(' and his ', '\'s ');
}

function leadersAndTheir() {
	return leaders() + ' and their ';
}

function leaders () {
	return randomItem(
		maleLeaderName() + ' and ' + maleLeaderName(),
		maleFirstName() + ' and ' + maleLeaderName(),
		femaleFirstName() + ' and ' + femaleLeaderName(),
		lastName() + ' and ' + lastName(),
		'The ' + lastName() + ' Brothers',
		'The ' + lastName() + ' Sisters',
		"The King's Jesters"
	);
}

function maleLeaderName () {
	return randomItem(
		adjective() + maleFirstName() + ' ' + lastName(),
		maleFirstName() + ' ' + middleInitialOrNickname() + lastName()
	) + honorific();
}

function femaleLeaderName () {
	return femaleFirstName() + ' ' + lastName();
}

function adjective () {
	return randomItem(...itemChance('Jolly', 'Smilin\'', 'General', AFTER, 20));
}

function maleFirstName () {
	return randomItem(
		'Abbey', 'Albert', 'Arthur', 'Bill', 'Bob', 'Bobby', 'Buddy', 'Carter',
		'Clyde', 'Donnie', 'Eddie', 'Edward', 'Edwin', 'Earl', 'Frank',
		'Fred', 'Gene',	'George', 'Glen', 'Hank', 'Hector', 'Henry', 'Howard',
		'Jack',	'James', 'John', 'Johnnie', 'Johnny', 'Karl', 'Louis', 'Lowell',
		'Mitchell', 'Ollie', 'Oscar', 'Pee Wee', 'Ray', 'Robin', 'Roger',
		'Rusty', 'Sammy', 'Scotty', 'Seymour', 'Sonny', 'Stuff', 'Tab', 'Ted',
		'Thomas', 'Vaughn', 'Walter', 'Wayne', 'Wendell', 'Wilbert', 'Willie',
		'Wilson'
	);
}

function femaleFirstName () {
	return randomItem(
		'Anita', 'Bessie', 'Carrie', 'Connie', 'Ellen', 'Ginny', 'Gloria',
		'Helen', 'June', 'Kitty', 'Louise', 'Margaret', 'Marie', 'Marion',
		'Martha', 'Mary', 'Maxine', 'Nellie', 'Olive', 'Rosetta', 'Ruby',
		'Shannon', 'Virginia', 'Vivian'
	);
}

function middleInitialOrNickname () {
	return randomItem(
		'A. ', 'B. ', 'C. ', 'D. ', 'E. ', 'F. ', 'G. ', 'H. ', 'I. ', 'J. ',
		'K. ', 'L. ', 'M. ', 'N. ', 'O. ', 'P. ', 'Q. ', 'R. ', 'S. ', 'T. ',
		'U. ', 'V. ', 'W. ', 'X. ', 'Y. ', 'Z. ', '"Red" ', '"Scat" ',
		...emptyItems(27)
	);
}

function lastName () {
	return randomItem(
		'Adair', 'Adams', 'Allen', 'Ayres', 'Balmer', 'Baranco', 'Baur',
		'Bechet', 'Brown', 'Bostic', 'Burke', 'Carlson', 'Cletro', 'Crayton',
		'Crosby', 'Costa', 'Dixon', 'Fox', 'Fuller', 'Gershwin', 'Gray',
		'Hall', 'Heier', 'Jackson', 'Jenkins', 'Johnson', 'Jordan', 'Kahn',
		'Kaufman', 'Kaye', 'Kent', 'King', 'Kreisler', 'Kryger', 'Lane',
		'Lewis', 'Maddox', 'McCoy', 'McDonald', 'McGhee', 'McKinley',
		'McPartland', 'Melton', 'Miller', 'Monroe', 'Mooney', 'Powers',
		'Pryor', 'Russels', 'Schneider', 'Simms', 'Short', 'Smith', 'Snow',
		'Sparrow', 'Swift', 'Tharpe', 'Williams', 'Worth'
	);
}

function honorific () {
	return randomItem(
		...itemChance('"King of the Polkas"', '"The Crooning Troubador"', BEFORE, 30)
	);
}

function bandLabel () {
	return randomItem(
		memberNouns(),
		memberNounPrefix() + ' ' + memberNouns(),
		place() + ' ' + memberNounPrefix() + ' ' + memberNouns(),
		place() + ' ' + memberNouns(),
		memberNounPrefix() + ' ' + bandNumeric(),
		instrument() + bandNumeric(),
		bandNumeric(),
		orchestra(),
		orchestra(),
		orchestra(),
		orchestra(),
	);
}

function place () {
	return randomItem(
		'Casa Loma', 'Campus', 'City', 'Farm', 'Grand Canyon', 'Hollywood',
		'Lousiana', 'Motor City', 'New Orleans', 'Prairie', 'Red River',
		'Santa Fe', 'Smoky Mountain', 'Texas', 'Valley'
	);
}

function instrument () {
	return randomItem(
		...itemChance('Jug', 'Marimba', 'Saxophone', 'Tympany', AFTER, 20)
	);
}

function bandNumeric () {
	return randomItem(
		'Band', 'Ensemble', 'Five', 'Trio', 'Quartet', 'Quartette', 'Quintet',
		'Sax-O-Tette', 'Sextet', 'Symphonette'
	);
}

function memberNounPrefix () {
	return randomItem(
		'All Star', 'Barn Dance', 'Black and White', 'Blue Grass',
		'Boogie Woogie', 'Buster Brown', 'Cabin', 'Cactus', 'Cool',
		'Dependable', 'Dixie Lily', 'Famous', 'Fox', 'Happiness', 'Hot Box',
		'Jazz', 'Jolly', 'Marimba', 'Master', 'Melody', 'Moana', 'Musical',
		'Rambling', 'Rhythm', 'Round Up', 'Royal', 'Statler', 'Tivoli',
		'Varsity'
	);
}

function memberNouns () {
	return randomItem(
		'Band', 'Blazers', 'Bob Cats', 'Bohemians', 'Bombadiers', 'Boys',
		'Briarhoppers', 'Canadians', 'Caroleers', 'Cats', 'Chicagoans',
		'Cornellians', 'Cowboys', 'Dude Ranchers', 'Feetwarmers', 'Gang',
		'Girls', 'Girls of the Golden West', 'Hawaiians', 'Highpointers',
		'Hounds', 'Hunters', 'Islanders', 'Stompers', 'Knights',
		'Melody Makers', 'Millers', 'Pennsylvanians', 'Plainsmen', 'Ramblers',
		'Rangers', 'Rhythmasters', 'Rounders', 'Slickers',
		'Sons of the Golden West', 'Syncopaters', 'Swing Wing', 'Tornadoes',
		'Troopers', 'Twisters', 'Vagabonds', 'Westerners', 'Yanks'
	);
}

function orchestra () {
	return randomItem(
		place() + ' ' + orchestraSpecialty(), // here
		place() + ' ',
		orchestraSpecialty(),
	) + 'Orchestra' + orchestraSuffix();
}

function orchestraSpecialty () {
	return orchestraSpecialtyPrefix() + orchestraSpecialtyMain();
}

function orchestraSpecialtyPrefix () {
	return randomItem(...itemChance('International', 'Specialty', AFTER, 5));
}

function orchestraSpecialtyMain () {
	return randomItem(...itemChance('Dance', 'Concert', 'Folk', AFTER, 5));
}

function orchestraSuffix () {
	return randomItem(...itemChance('De Luxe', BEFORE, 10));
}
