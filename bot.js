'use strict';

// Based on Daniel Shiffman's tutorial: http://shiffman.net/a2z/twitter-bots/
let Twit = require('twit');

let twitter;

if (process.env.consumer_key) {
	twitter = new Twit({
		consumer_key:        process.env.consumer_key,
		consumer_secret:     process.env.consumer_secret,
		access_token:        process.env.access_token,
		access_token_secret: process.env.access_token_secret
	});
} else {
	const config = require('./config.js');
	twitter = new Twit(config);
}

let band = require('./vintage-bands');

// Post on startup
tweet();

setInterval(tweet, 60*60*1000);

function tweet () {
	twitter.post('statuses/update', { status: band() }, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log(err);
		} else {
			console.log('Tweeted: ' + data.text);
		}
	}
}