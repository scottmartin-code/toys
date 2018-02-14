makeName();

document.getElementById('generate-button').addEventListener('click', () => {
	makeName();
});

function makeName () {
	document.getElementById('result').innerHTML = groupName();
}

// To do: take chance as parameter and merge in itemChance
function randomItem(items) {
	let r = Math.floor(Math.random() * items.length);
	return items[r];
}

function itemChance (item, chance) {
	let items = [];
	items.push(item);
	return [items, ...emptyItems(chance)];
}

function emptyItems (number) {
	let items = [];
	for (let i = 1; i < number; i++) {
		items.push('');
	}
	return items;
}

function nameRecipe (ingredients) {
	return () => {
		return ingredients.join('');
	}
}

function groupName () {
	let outputs = [
		nameRecipe([ leaderOrLeadersPossessive(), groupLabel() ]),
		// To do: make this less frequent
		nameRecipe([ leaderName(), ' and the ', memberNouns() ])
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

function leaderOrLeadersPossessive () {
	let outputs = [
		nameRecipe([ leaderAndHis() ]),
		nameRecipe([ leaderAndHer() ]),
		nameRecipe([ leadersAndTheir() ])
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

function leaderAndHer () {
	return femaleFirstName() + ' ' + lastName() + randomItem([' and her ', '\'s ']);
}

function leaderAndHis () {
	return leaderName() + randomItem([' and his ', '\'s ']);
}

function leadersAndTheir() {
	return leaders() + ' and their ';
}

function leaders () {
	let outputs = [
		nameRecipe([ leaderName(), ' and ', leaderName() ]),
		nameRecipe([ maleFirstName(), ' and ', leaderName() ]),
		nameRecipe([ lastName(), ' and ', lastName() ]),
		nameRecipe([ 'The ', lastName(), ' Brothers' ]),
		nameRecipe([ 'The ', lastName(), ' Sisters' ]),
		nameRecipe([ "The King's Jesters" ])
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

function leaderName () {
	let names = [
		nameRecipe([ maleFirstName(), ' ', lastName() ]),
		nameRecipe([ maleFirstName(), ' ', middleInitialOrNickname(),
			' ', lastName() ])
	];

	let r = Math.floor(Math.random() * names.length);

	// To do: don't return both adjective and middle initial
	return adjective() + names[r]() + honorific();
}

function adjective () {
	let outputs = itemChance("Smilin' ", 20);
	// add: General
	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r];
}

function maleFirstName () {
	return randomItem([
		'Abbey', 'Albert', 'Arthur', 'Bill', 'Bobby', 'Buddy', 'Carter',
		'Clyde', 'Donnie', 'Eddie', 'Edward', 'Edwin', 'Earl', 'Frank',
		'Fred', 'Gene',	'George', 'Glen', 'Hank', 'Hector', 'Henry', 'Howard',
		'Jack',	'James', 'John', 'Johnnie', 'Johnny', 'Karl', 'Louis',
		'Mitchell', 'Ollie', 'Oscar', 'Ray', 'Roger', 'Rusty', 'Sammy',
		'Scotty', 'Sonny', 'Stuff', 'Tab', 'Ted', 'Tharpe', 'Thomas',
		'Vaughn', 'Walter', 'Wayne', 'Wendell', 'Wilbert', 'Willie', 'Wilson'
	]);
}

function femaleFirstName () {
	return randomItem([ 'Ginny', 'Helen', 'Louise', 'Margaret', 'Rosetta' ]);
}

function middleInitialOrNickname () {
	return randomItem([
		'A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'I.', 'J.',
		'K.', 'L.', 'M.', 'N.', 'O.', 'P.', 'Q.', 'R.', 'S.', 'T.',
		'U.', 'V.',	'W.', 'X.', 'Y.', 'Z.', '"Red"', ...emptyItems(27)
	]);
}

function lastName () {
	return randomItem([
		'Adams', 'Allen', 'Ayres', 'Balmer', 'Baranco', 'Baur', 'Brown',
		'Bostic', 'Burke', 'Carlson', 'Cletro', 'Costa', 'Dixon', 'Fox',
		'Fuller', 'Gershwin', 'Gray', 'Hall', 'Heier', 'Jackson', 'Jenkins',
		'Johnson', 'Jordan', 'Kahn', 'Kaufman', 'Kaye', 'Kent', 'King',
		'Kreisler',	'Kryger', 'Lewis', 'Maddox', 'McCoy', 'McDonald',
		'McKinley', 'McPartland', 'Melton', 'Miller', 'Monroe', 'Mooney',
		'Pryor', 'Russels', 'Schneider', 'Simms', 'Short', 'Smith', 'Snow',
		'Sparrow', 'Swift', 'Williams', 'Worth'
	]);
}

function honorific () {
	return randomItem(itemChance(' "King of the Polkas"', 20));
}

function groupLabel () {
	let outputs = [
		nameRecipe([ memberNouns() ]),
		nameRecipe([ memberNounPrefix(), ' ', memberNouns() ]),
		nameRecipe([ orchestra() ]),
		nameRecipe([
			randomItem([
				'Band', 'Ensemble', 'Trio', 'Quartet', 'Quartette', 'Quintet',
				'Sextet'
			])
		])
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

// To do: [instrument] band e.g. marimba
// To do: place prefix members e.g. "Grand Canyon Cabin Boys"
function memberNounPrefix () {
	return randomItem([
		'Black and White', 'Blue Grass', 'Buster Brown', 'Cabin', 'Cactus',
		'City', 'Cool',	'Dependable', 'Dixie Lily', 'Famous', 'Farm', 'Fox',
		'Jazz',	'Jolly', 'Marimba',	'Melody', 'Moana', 'Motor City',
		'Musical', 'Rambling', 'Red River', 'Rhythm', 'Round Up', 'Royal',
		'Santa Fe', 'Statler', 'Texas', 'Tivoli', 'Tympany', 'Valley'
	]);
}

function memberNouns () {
	return randomItem([
		'Band', 'Bohemians', 'Bombadiers', 'Boys', 'Canadians', 'Cats',
		'Chicagoans', 'Cowboys', 'Five', 'Gang', 'Hawaiians', 'Highpointers',
		'Hunters', 'Islanders', 'Knights', 'Millers', 'Pennsylvanians',
		'Plainsmen', 'Rangers', 'Rhythmasters', 'Slickers', 'Syncopaters',
		'Tornadoes', 'Troopers', 'Twisters', 'Vagabonds', 'Westerners', 'Yanks'
	]);
}

function orchestra () {
	return orchestraPlace() + orchestraSpecialty()
		+ ' Orchestra' + orchestraSuffix();
}

function orchestraArticle () {
	return randomItem(itemChance('The ', 2));
}

function orchestraPlace () {
	return randomItem(itemChance('Casa Loma ', 10));
}

function orchestraSpecialty () {
	return orchestraSpecialtyPrefix() + orchestraSpecialtyMain();
}

function orchestraSpecialtyPrefix () {
	let outputs = [
		nameRecipe([ randomItem(itemChance('Folk ', 10)) ]),
		nameRecipe([ randomItem(itemChance('International ', 10)) ]),
		nameRecipe([ randomItem(itemChance('Specialty ', 10)) ])
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

function orchestraSpecialtyMain () {
	let outputs = [
		nameRecipe([ randomItem(itemChance('Dance ', 10)) ]),
		nameRecipe([ randomItem(itemChance('Concert ', 10)) ])
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

function orchestraSuffix () {
	return randomItem(itemChance(' De Luxe', 10));
}