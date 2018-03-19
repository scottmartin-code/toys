const recipes = require('./RecipeData.js');

module.exports = () => { return makeRecipe('bandName') }

function makeRecipe (name) {
	const recipe = recipes[name];

	let recipeItems = recipe.items.map( item => {
		if (typeof item == 'object') {
			return item.reduce( (acc, r) => {
				return recipes[r] ? acc + makeRecipe(r) : acc + r;
			}, '');
		} else {
			return item;
		}
	});

	let out;

	if (recipe.chance) {
		let spaced = recipeItems.map(item => {
			return recipe.space == 'before' ? ` ${item}` : `${item} `;
		});

		out = [...spaced, ...Array.from({length: recipe.chance}, (v, i) => '')];
	} else {
		out = [...recipeItems];
	}

	return out[Math.floor(Math.random() * out.length)];
}
