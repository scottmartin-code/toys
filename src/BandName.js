const recipes = require('./RecipeData.js');

function bandName () {
	return runRecipe('bandName');
}
module.exports = bandName;

function emptyItems (number) {
	let items = [];
	for (let i = 1; i < number; i++) {
		items.push('');
	}
	return items;
}

function randomItem (items) {
	return items[Math.floor(Math.random() * items.length)];
}

function itemChance (chanceItems, chance, spaceMode) {
	for (let i = 0; i < chanceItems.length; i++) {
		if (spaceMode == 'before') {
			chanceItems[i] = ' ' + chanceItems[i];
		} else {
			chanceItems[i] += ' ';
		}
	};

	chanceItems.push(...emptyItems(chance));
	return chanceItems;
}

function runRecipe (recipeName) {
	const recipe = recipes[recipeName];
	const items = recipe.items;

	let outputs = [];

	items.forEach( item => {
		let recipeResult = '';

		if (typeof item == 'object') { // recipes
			item.forEach( recipe => {
				let result = recipe.match(/_/)
					? recipe.replace(/_/, '') // literal
					: runRecipe(recipe);

				recipeResult += result;
			});
		} else {
			recipeResult = item;
		}

		outputs.push(recipeResult);
	});

	if (recipe.chance) {
		return randomItem(itemChance(outputs, recipe.chance, recipe.spaceMode));
	} else {
		return randomItem(outputs);
	}
}
