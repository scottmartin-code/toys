const recipes = require('./RecipeData.js');

module.exports = () => { return makeRecipe('bandName') }

function random (items, chance, space) {
	let outputs;

	if (chance) {
		let spaced = items.map(item => {
			return space == 'before' ? ` ${item}` : `${item} `;
		});

		outputs = [...spaced, ...Array.from({length: chance}, (v, i) => '')];
	} else {
		outputs = [...items];
	}

	return outputs[Math.floor(Math.random() * outputs.length)];
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

	return random(possibleOutputs, recipe.chance, recipe.space);
}
