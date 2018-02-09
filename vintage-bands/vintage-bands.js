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

function groupName () {
	return leaderOrLeadersPossessive() + groupLabel();
}

function leaderOrLeadersPossessive () {
	let outputs = [
		() => { return leaderAndHis() },
		() => { return leadersAndTheir() }
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

function leaderAndHis () {
	return leaderName() + randomItem([' and his ', '\'s ']);
}

function leadersAndTheir() {
	return leaders() + ' and their ';
}

function leaders () {
	let outputs = [
		() => { return leaderName() + ' and ' + leaderName() },
		() => { return firstName() + ' and ' + leaderName() },
		() => { return lastName() + ' and ' + lastName() },
		() => { return 'The ' + lastName() + ' Brothers' },
		() => { return 'The ' + lastName() + ' Sisters' },
		() => { return "The King's Jesters" }
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

function leaderName () {
	let names = [
		() => { return firstName() + ' ' + lastName() },
		() => { return firstName() + ' ' + middleInitialOrNickname()
			+ ' ' + lastName() }
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

function firstName () {
	return randomItem([
		'Abbey', 'Albert', 'Arthur', 'Bill', 'Bobby', 'Buddy', 'Carter',
		'Clyde', 'Donnie', 'Edward', 'Edwin', 'Earl', 'Frank', 'Fred', 'Gene',
		'George', 'Glen', 'Hank', 'Hector', 'Henry', 'Howard', 'Jack',
		'James', 'John', 'Johnnie', 'Johnny', 'Karl', 'Louis', 'Mitchell',
		'Ollie', 'Oscar', 'Ray', 'Roger', 'Rusty', 'Sammy', 'Scotty', 'Sonny',
		'Stuff', 'Tab', 'Ted', 'Thomas', 'Vaughn', 'Walter', 'Wayne',
		'Wendell', 'Wilbert', 'Willie', 'Wilson'
	]);
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
		'Bostic', 'Burke', 'Carlson', 'Costa', 'Dixon', 'Fox', 'Fuller',
		'Gershwin', 'Gray', 'Hall', 'Heier', 'Jackson', 'Jenkins', 'Johnson',
		'Jordan', 'Kahn', 'Kaufman', 'Kaye', 'Kent', 'King', 'Kreisler',
		'Kryger', 'Lewis', 'McCoy', 'McDonald', 'McKinley', 'McPartland',
		'Melton', 'Miller', 'Monroe', 'Mooney', 'Pryor', 'Russels',
		'Schneider', 'Short', 'Smith', 'Snow', 'Sparrow', 'Swift', 'Williams',
		'Worth'
	]);
}

function honorific () {
	return randomItem(itemChance(' "King of the Polkas"', 20));
}

function groupLabel () {
	let outputs = [
		() => { return memberNouns() },
		() => { return memberNounPrefix() + ' ' + memberNouns() },
		() => { return orchestra() },
		() => { return randomItem([
			'Band', 'Ensemble', 'Trio', 'Quartet', 'Quartette', 'Quintet',
			'Sextet'
			]) },
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

// To do: [instrument] Band e.g. marimb

function memberNounPrefix () {
	return randomItem([
		'Blue Grass', 'Buster Brown', 'Cactus', 'City', 'Cool', 'Famous',
		'Farm',	'Fox', 'Jazz', 'Jolly', 'Marimba', 'Melody', 'Moana',
		'Motor City', 'Musical', 'Rambling', 'Red River', 'Rhythm', 'Royal',
		'Santa Fe',	'Statler', 'Texas', 'Tivoli', 'Valley'
	]);
}

function memberNouns () {
	return randomItem([
		'Band', 'Bombadiers', 'Boys', 'Canadians', 'Cats', 'Chicagoans',
		'Cowboys', 'Five', 'Gang', 'Hawaiians', 'Hunters', 'Islanders',
		'Knights', 'Millers', 'Pennsylvanians', 'Rangers', 'Slickers',
		'Syncopaters', 'Tornadoes', 'Troopers', 'Twisters', 'Vagabonds',
		'Yanks'
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
		() => { return randomItem(itemChance('Folk ', 10)) },
		() => { return randomItem(itemChance('International ', 10)) },
		() => { return randomItem(itemChance('Specialty ', 10)) }
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

function orchestraSpecialtyMain () {
	let outputs = [
		() => { return randomItem(itemChance('Dance ', 10)) },
		() => { return randomItem(itemChance('Concert ', 10)) }
	];

	let r = Math.floor(Math.random() * outputs.length);
	return outputs[r]();
}

function orchestraSuffix () {
	return randomItem(itemChance(' De Luxe', 10));
}