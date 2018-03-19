const recipes = require('./RecipeData.js');

module.exports = () => { return makeRecipe('bandName') }

function random (items) {
	return items[Math.floor(Math.random() * items.length)];
}

function itemChance (inputItems, chance, space) {
	let chanceItems = inputItems.map(item => {
		return space == 'before' ? ` ${item}` : `${item} `;
	});

	chanceItems.push(...Array.from({length: chance}, (v, i) => ''));
	return chanceItems;
}

function makeRecipe (recipeName) {
	const recipe = recipes[recipeName];

	let outputs = recipe.items.map( item => {
		let result = '';

		if (typeof item == 'object') {
			item.forEach( recipe => {
				result += recipes[recipe] ? makeRecipe(recipe) : recipe;
			});
		} else {
			result = item;
		}

		return result;
	});

	return recipe.chance
		? random(itemChance(outputs, recipe.chance, recipe.space))
		: random(outputs);
}
