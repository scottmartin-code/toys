makeName();

document.getElementById('generate-button').addEventListener('click', () => {
	makeName();
});

function makeName () {
	document.getElementById('result').innerHTML = groupName();
}

// To do: take chance as parameter and merge in itemChance
function randomItem () {
	let items = [...arguments];

	return items[Math.floor(Math.random() * items.length)];
}

function itemChance () {
	let chanceItems = [...arguments];
	let unsuccessful = chanceItems.pop() - 1;
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

function groupName () {
	return randomItem(
		leaderOrLeadersPossessive() + groupLabel(),
		leaderOrLeadersPossessive() + groupLabel(),
		leaderOrLeadersPossessive() + groupLabel(),
		leaderName() + ' and the ' + memberNouns()
	);
}

function leaderOrLeadersPossessive () {
	return randomItem(
		leaderAndHis(),
		leaderAndHer(),
		leadersAndTheir()
	);
}

// To do: rethink so leaderName isn't just male
function leaderAndHer () {
	return femaleFirstName() + ' ' + lastName()
		+ randomItem(' and her ', '\'s ');
}

function leaderAndHis () {
	return leaderName() + randomItem(' and his ', '\'s ');
}

function leadersAndTheir() {
	return leaders() + ' and their ';
}

function leaders () {
	return randomItem(
		leaderName() + ' and ' + leaderName(),
		maleFirstName() + ' and ' + leaderName(),
		lastName() + ' and ' + lastName(),
		'The ' + lastName() + ' Brothers',
		'The ' + lastName() + ' Sisters',
		"The King's Jesters"
	);
}

// See comment above about gender
function leaderName () {
	return adjective() + maleFirstName() + ' ' + middleInitialOrNickname()
	 + lastName() + honorific();

	// To do: don't return both adjective and middle initial
}

function adjective () {
	return randomItem(...itemChance('Jolly ', 'Smilin\' ', 'General ', 20));
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
		...itemChance(' "King of the Polkas"', ' "The Crooning Troubador"', 30)
	);
}

function groupLabel () {
	return randomItem(
		memberNouns(),
		memberNounPrefix() + ' ' + memberNouns(),
		groupPlace() + ' ' + memberNounPrefix() + ' ' + memberNouns(),
		groupPlace() + ' ' + memberNouns(),
		orchestra(),
		'Band', 'Barn Dance Trio', 'Ensemble', 'Five', 'Three Blazers', 'Trio',
		'Quartet', 'Quartette', 'Quintet', 'Sax-O-Tette', 'Sextet',
		'Symphonette'
	);
}

function groupPlace () {
	return randomItem(
		'Campus', 'City', 'Farm', 'Grand Canyon', 'Hollywood', 'Lousiana',
		'Motor City', 'New Orleans', 'Prairie', 'Red River', 'Santa Fe',
		'Smoky Mountain', 'Texas', 'Valley'
	);
}

// To do: [instrument] band e.g. marimba
function memberNounPrefix () {
	return randomItem(
		'Black and White', 'Blue Grass', 'Boogie Woogie', 'Buster Brown',
		'Cabin', 'Cactus', 'Cool', 'Dependable', 'Dixie Lily', 'Famous',
		'Fox', 'Hot Box', 'Jazz', 'Jolly', 'Marimba', 'Master', 'Melody',
		'Moana', 'Musical', 'Rambling', 'Rhythm', 'Round Up', 'Royal',
		'Statler', 'Tivoli', 'Tympany', 'Varsity'
	);
}

function memberNouns () {
	return randomItem(
		'Band', 'Bob Cats', 'Bohemians', 'Bombadiers', 'Boys', 'Briarhoppers',
		'Canadians', 'Caroleers', 'Cats', 'Chicagoans', 'Cornellians',
		'Cowboys', 'Dude Ranchers', 'Feetwarmers', 'Gang', 'Girls',
		'Girls of the Golden West', 'Hawaiians', 'Highpointers', 'Hounds',
		'Hunters', 'Islanders', 'Jug Stompers', 'Knights', 'Melody Makers',
		'Millers', 'Pennsylvanians', 'Plainsmen', 'Ramblers', 'Rangers',
		'Rhythmasters',	'Rounders', 'Slickers', 'Sons of the Golden West',
		'Syncopaters', 'Tornadoes', 'Troopers',	'Twisters', 'Vagabonds',
		'Westerners', 'Yanks'
	);
}

function orchestra () {
	return orchestraPlace() + orchestraSpecialty()
		+ 'Orchestra' + orchestraSuffix();
}

function orchestraArticle () {
	return randomItem(...itemChance('The ', 2));
}

function orchestraPlace () {
	return randomItem(...itemChance('Casa Loma ', 10));
}

function orchestraSpecialty () {
	return orchestraSpecialtyPrefix() + orchestraSpecialtyMain();
}

function orchestraSpecialtyPrefix () {
	return randomItem(...itemChance('Folk ', 'International ', 'Specialty ', 10));
}

function orchestraSpecialtyMain () {
	return randomItem(...itemChance('Dance ', 'Concert ', 10));
}

function orchestraSuffix () {
	return randomItem(...itemChance(' De Luxe', 10));
}