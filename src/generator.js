import { recipes } from './recipes.js'

export function generate () {
	const out = makeRecipe('bandName')

	const boring = /^(?:\w+ ){1,2}\w+$/

	if (boring.test(out)) return generate()

	return out
}

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

	if (recipe.chance) {
		let out = ''

		if (random(recipe.chance) === 1) {
			out = randomItem(recipeItems)
			out = recipe.space === 'before' ? ` ${out}` : `${out} `
		}

		return out
	} else
		return randomItem(recipeItems)
}

function randomItem (items) {
	return items[random(items.length)]
}

function random (max) {
	return Math.floor(Math.random() * Math.floor(max))
}
