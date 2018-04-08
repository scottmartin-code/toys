'use strict';

const Twit     = require('twit');
const bandName = require('../src/BandName.js');

let twitter;

try {
	twitter = new Twit({
		consumer_key:        process.env.consumer_key,
		consumer_secret:     process.env.consumer_secret,
		access_token:        process.env.access_token,
		access_token_secret: process.env.access_token_secret,
	});
} catch (err) {
	throw new Error('Problem initializing Twit:', error.message);
}

// Post on startup
tweet();

setInterval(tweet, 60 * 60 * 1000);

function tweet () {
	twitter.post('statuses/update', { status: bandName() }, tweeted);

	function tweeted(error, data, response) {
		if (error) throw new Error('Problem trying to tweet:', error.message);

		console.log('Tweeted: ' + data.text);
	}
}
