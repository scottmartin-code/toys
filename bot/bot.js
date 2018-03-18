'use strict';

const Twit     = require('twit');
const bandName = require('../src/BandName.js');

let twitter;

try {
	twitter = new Twit({
		consumer_key:        process.env.consumer_key,
		consumer_secret:     process.env.consumer_secret,
		access_token:        process.env.access_token,
		access_token_secret: process.env.access_token_secret
	});
} catch(err) {
	throw new Error('Twitter API credentials not loaded, is .envrc present?');
}

// Post on startup
tweet();

setInterval(tweet, 60*60*1000);

function tweet () {
	twitter.post('statuses/update', { status: bandName() }, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log(err);
		} else {
			console.log('Tweeted: ' + data.text);
		}
	}
}