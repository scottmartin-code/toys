import {
	RECEIVE_BAND,
} from '../constants/';

const { bandName } = require('../BandName');

export const receiveBand = band => {
	return {
		type: RECEIVE_BAND,
		band,
	};
};

export const makeBandName = () => {
	return dispatch => {
		return dispatch(receiveBand(bandName()));
	};
};

// To do: random label image and associated text styling. The Staunton
// collection has hundreds, of which many are now public domain
// http://www.tedstaunton.com/site_map/site_map.html
// https://en.wikipedia.org/wiki/List_of_countries%27_copyright_lengths
