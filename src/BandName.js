const recipes = require('./RecipeData.js');

function bandName () {
	return runRecipe('bandName');
}
module.exports = bandName;

function randomItem (items) {
	return items[Math.floor(Math.random() * items.length)];
}

function itemChance (inputItems, chance, spaceMode) {
	let chanceItems = inputItems.map(item => {
		return spaceMode == 'before' ? ` ${item}` : `${item} `;
	});

	chanceItems.push(...Array.from({length: chance}, (v, i) => ''));
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
