'use strict';

// Based on Daniel Shiffman's tutorial: http://shiffman.net/a2z/twitter-bots/
let Twit = require('twit');
const config = require('./config.js');
let T = new Twit(config);

let band = require('./vintage-bands');

tweet();

setInterval(tweet, 1*60*1000);

function tweet () {
	T.post('statuses/update', { status: band() }, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log(err);
		} else {
			console.log('Tweeted: ' + data.text);
		}
	};
}