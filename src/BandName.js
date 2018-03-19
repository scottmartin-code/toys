const recipes = require('./RecipeData.js');

module.exports = () => { return makeRecipe('bandName') }

function random (items) {
	return items[Math.floor(Math.random() * items.length)];
}

function itemChance (items, chance, space) {
	let outputs = items.map(item => {
		return space == 'before' ? ` ${item}` : `${item} `;
	});

	outputs.push(...Array.from({length: chance}, (v, i) => ''));
	return outputs;
}

function makeRecipe (name) {
	const recipe = recipes[name];

	let possibleOutputs = recipe.items.map( item => {
		if (typeof item == 'object') {
			return item.reduce( (acc, r) => {
				return acc + recipes[r] ? makeRecipe(r)	: r;
			}, '');
		} else {
			return item;
		}
	});

	return recipe.chance
		? random(itemChance(possibleOutputs, recipe.chance, recipe.space))
		: random(possibleOutputs);
}
