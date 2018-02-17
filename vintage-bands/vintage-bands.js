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
	let chance = chanceItems.pop();
	chanceItems.push(...emptyItems(chance));
	return chanceItems;
}

function emptyItems (number) {
	let items = [];
	for (let i = 1; i < number; i++) {
		items.push('');
	}
	return items;
}

function nameRecipe () {
	return () => {
		return [...arguments].join('');
	}
}

function randomRecipe () {
	let recipes = [...arguments];
	return recipes[Math.floor(Math.random() * recipes.length)]();
}

function groupName () {
	return randomRecipe(
		nameRecipe( leaderOrLeadersPossessive(), groupLabel() ),
		// To do: make this less frequent
		nameRecipe( leaderName(), ' and the ', memberNouns() )
	);
}

function leaderOrLeadersPossessive () {
	return randomRecipe(
		nameRecipe( leaderAndHis() ),
		nameRecipe( leaderAndHer() ),
		nameRecipe( leadersAndTheir() )
	);
}

function leaderAndHer () {
	return femaleFirstName() + ' ' + lastName() + randomItem(' and her ', '\'s ');
}

function leaderAndHis () {
	return leaderName() + randomItem(' and his ', '\'s ');
}

function leadersAndTheir() {
	return leaders() + ' and their ';
}

function leaders () {
	return randomRecipe(
		nameRecipe( leaderName(), ' and ', leaderName() ),
		nameRecipe( maleFirstName(), ' and ', leaderName() ),
		nameRecipe( lastName(), ' and ', lastName() ),
		nameRecipe( 'The ', lastName(), ' Brothers' ),
		nameRecipe( 'The ', lastName(), ' Sisters' ),
		nameRecipe( "The King's Jesters" )
	);
}

function leaderName () {
	let name = randomRecipe(
		nameRecipe( maleFirstName(), ' ', lastName() ),
		nameRecipe( maleFirstName(), ' ', middleInitialOrNickname(),
			' ', lastName() )
	);

	// To do: don't return both adjective and middle initial
	return adjective() + name + honorific();
}

function adjective () {
	return randomItem(...itemChance('Smilin\' ', 'General ', 20));
}

function maleFirstName () {
	return randomItem(
		'Abbey', 'Albert', 'Arthur', 'Bill', 'Bobby', 'Buddy', 'Carter',
		'Clyde', 'Donnie', 'Eddie', 'Edward', 'Edwin', 'Earl', 'Frank',
		'Fred', 'Gene',	'George', 'Glen', 'Hank', 'Hector', 'Henry', 'Howard',
		'Jack',	'James', 'John', 'Johnnie', 'Johnny', 'Karl', 'Louis',
		'Mitchell', 'Ollie', 'Oscar', 'Ray', 'Roger', 'Rusty', 'Sammy',
		'Scotty', 'Sonny', 'Stuff', 'Tab', 'Ted', 'Tharpe', 'Thomas',
		'Vaughn', 'Walter', 'Wayne', 'Wendell', 'Wilbert', 'Willie', 'Wilson'
	);
}

function femaleFirstName () {
	return randomItem( 'Ginny', 'Helen', 'Louise', 'Margaret', 'Rosetta' );
}

function middleInitialOrNickname () {
	return randomItem(
		'A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'I.', 'J.',
		'K.', 'L.', 'M.', 'N.', 'O.', 'P.', 'Q.', 'R.', 'S.', 'T.',
		'U.', 'V.', 'W.', 'X.', 'Y.', 'Z.', '"Red"', '"Scat"', ...emptyItems(27)
	);
}

function lastName () {
	return randomItem(
		'Adams', 'Allen', 'Ayres', 'Balmer', 'Baranco', 'Baur', 'Brown',
		'Bostic', 'Burke', 'Carlson', 'Cletro', 'Costa', 'Dixon', 'Fox',
		'Fuller', 'Gershwin', 'Gray', 'Hall', 'Heier', 'Jackson', 'Jenkins',
		'Johnson', 'Jordan', 'Kahn', 'Kaufman', 'Kaye', 'Kent', 'King',
		'Kreisler',	'Kryger', 'Lewis', 'Maddox', 'McCoy', 'McDonald',
		'McKinley', 'McPartland', 'Melton', 'Miller', 'Monroe', 'Mooney',
		'Pryor', 'Russels', 'Schneider', 'Simms', 'Short', 'Smith', 'Snow',
		'Sparrow', 'Swift', 'Williams', 'Worth'
	);
}

function honorific () {
	return randomItem(...itemChance(' "King of the Polkas"', 20));
}

function groupLabel () {
	return randomRecipe(
		nameRecipe( memberNouns() ),
		nameRecipe( memberNounPrefix(), ' ', memberNouns() ),
		nameRecipe( orchestra() ),
		nameRecipe(
			randomItem(
				'Band', 'Ensemble', 'Trio', 'Quartet', 'Quartette', 'Quintet',
				'Sextet'
			)
		)
	);
}

// To do: [instrument] band e.g. marimba
// To do: place prefix members e.g. "Grand Canyon Cabin Boys"
function memberNounPrefix () {
	return randomItem(
		'Black and White', 'Blue Grass', 'Buster Brown', 'Cabin', 'Cactus',
		'City', 'Cool',	'Dependable', 'Dixie Lily', 'Famous', 'Farm', 'Fox',
		'Jazz',	'Jolly', 'Lousiana', 'Marimba',	'Melody', 'Moana',
		'Motor City', 'Musical', 'Rambling', 'Red River', 'Rhythm',
		'Round Up', 'Royal', 'Santa Fe', 'Statler', 'Texas', 'Tivoli',
		'Tympany', 'Valley'
	);
}

function memberNouns () {
	return randomItem(
		'Band', 'Bohemians', 'Bombadiers', 'Boys', 'Canadians', 'Cats',
		'Chicagoans', 'Cowboys', 'Dude Ranchers', 'Five', 'Gang', 'Hawaiians',
		'Highpointers',	'Hunters', 'Islanders', 'Jug Stompers', 'Knights',
		'Millers', 'Pennsylvanians', 'Plainsmen', 'Rangers', 'Rhythmasters',
		'Rounders', 'Slickers', 'Syncopaters', 'Tornadoes', 'Troopers',
		'Twisters',	'Vagabonds', 'Westerners', 'Yanks'
	);
}

function orchestra () {
	return orchestraPlace() + orchestraSpecialty()
		+ ' Orchestra' + orchestraSuffix();
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
	return randomRecipe(
		nameRecipe(randomItem(...itemChance('Folk ', 10))),
		nameRecipe(randomItem(...itemChance('International ', 10))),
		nameRecipe(randomItem(...itemChance('Specialty ', 10)))
	);
}

function orchestraSpecialtyMain () {
	return randomRecipe(
		nameRecipe(randomItem(...itemChance('Dance ', 10))),
		nameRecipe(randomItem(...itemChance('Concert ', 10)))
	);
}

function orchestraSuffix () {
	return randomItem(...itemChance(' De Luxe', 10));
}