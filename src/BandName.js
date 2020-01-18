import { recipes } from './recipes.js'

function makeRecipe (name) {
	const recipe = recipes[name]

	const recipeItems = recipe.items.map( item => {
		if (typeof item === 'object')
			return item.reduce( (acc, r) => {
				return recipes[r] ? acc + makeRecipe(r) : acc + r
			}, '')
		else
			return item
	})

	let out

	if (recipe.chance) {
		const spaced = recipeItems.map(item => {
			return recipe.space === 'before' ? ` ${item}` : `${item} `
		})

		out = [ ...spaced, ...Array.from({ length: recipe.chance }, () => '') ]
	} else
		out = [ ...recipeItems ]

	return out[Math.floor(Math.random() * out.length)]
}

export function bandName () {
	const out = makeRecipe('bandName')

	const boring = /^(?:\w+ ){1,2}\w+$/

	if (boring.test(out)) return bandName()

	return out
}
