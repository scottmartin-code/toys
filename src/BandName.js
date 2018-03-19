const recipes = require('./RecipeData.js');

module.exports = () => {
	return runRecipe('bandName');
}

function randomItem (items) {
	return items[Math.floor(Math.random() * items.length)];
}

function itemChance (inputItems, chance, space) {
	let chanceItems = inputItems.map(item => {
		return space == 'before' ? ` ${item}` : `${item} `;
	});

	chanceItems.push(...Array.from({length: chance}, (v, i) => ''));
	return chanceItems;
}

function runRecipe (recipeName) {
	const recipe = recipes[recipeName];

	let outputs = recipe.items.map( item => {
		let result = '';

		if (typeof item == 'object') {
			item.forEach( recipe => {
				result += recipes[recipe] ? runRecipe(recipe) : recipe;
			});
		} else {
			result = item;
		}

		return result;
	});

	return recipe.chance
		? randomItem(itemChance(outputs, recipe.chance, recipe.space))
		: randomItem(outputs);
}
