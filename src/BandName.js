const recipes = require('./RecipeData.js');

module.exports = () => { return makeRecipe('bandName') }

function random (items) {
	return items[Math.floor(Math.random() * items.length)];
}

function itemChance (items, chance, space) {
	let outputs = items.map(item => {
		return space == 'before' ? ` ${item}` : `${item} `;
	});

	return [...outputs, ...Array.from({length: chance}, (v, i) => '')];
}

function makeRecipe (name) {
	const recipe = recipes[name];

	let possibleOutputs = recipe.items.map( item => {
		if (typeof item == 'object') {
			return item.reduce( (acc, r) => {
				return recipes[r] ? acc + makeRecipe(r) : acc + r;
			}, '');
		} else {
			return item;
		}
	});

	return recipe.chance
		? random(itemChance(possibleOutputs, recipe.chance, recipe.space))
		: random(possibleOutputs);
}
