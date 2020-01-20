import { band }      from './recipes/band.js'
import { base }      from './recipes/base.js'
import { leader }    from './recipes/leader.js'
import { names }     from './recipes/names.js'
import { orchestra } from './recipes/orchestra.js'
import { place }     from './recipes/place.js'

export const recipes = Object.assign({}, base, leader, names, band, orchestra, place)
