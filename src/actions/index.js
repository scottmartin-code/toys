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
