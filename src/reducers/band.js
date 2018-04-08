import { RECEIVE_BAND } from '../constants';

const bandName = require('../BandName');

const band = (state = bandName(), action) => {
	switch (action.type) {
		case RECEIVE_BAND:
			return action.band;
		default:
			return state;
	}
};

export default band;
