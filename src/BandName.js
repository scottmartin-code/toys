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
		if (typeof item == 'object') {
			return item.reduce( (acc, r) => {
				return acc + recipes[r] ? makeRecipe(r)	: r;
			}, '');
		} else {
			return item;
		}
	});

	return recipe.chance
		? random(itemChance(outputs, recipe.chance, recipe.space))
		: random(outputs);
}
