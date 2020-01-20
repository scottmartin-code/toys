import { recipes } from './recipes.js'

export function generate () {
	const out = makeRecipe('bandName')

	const boring = /^(?:\w+ ){1,2}\w+$/

	if (boring.test(out)) return generate()

	return out
}

function makeRecipe (name) {
	const recipe = recipes[name]

	let itemsToProcess = recipe.items

	if (recipe.rare && random(recipe.rare.chance) === 1)
		itemsToProcess = recipe.rare.items

	const recipeItems = itemsToProcess.map( item => {
		if (Array.isArray(item))
			return item.reduce( (acc, recipe) => {
				return recipes[recipe] ? acc + makeRecipe(recipe) : acc + recipe
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
