'use strict'

const Twit = require('twit')
const { bandName } = require('../src/BandName.js')

if (!process.env.PRODUCTION) {
	console.log(bandName())
	process.exit(0)
}

let twitter

try {
	twitter = new Twit({
		consumer_key:        process.env.TWITTER_CONSUMER_KEY,
		consumer_secret:     process.env.TWITTER_CONSUMER_SECRET,
		access_token:        process.env.TWITTER_ACCESS_TOKEN,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	})
} catch (error) {
	throw new Error('Problem initializing Twit:', error.message)
}

// Post on startup
tweet()

setInterval(tweet, 60 * 60 * 1000)

function tweet () {
	twitter.post('statuses/update', { status: bandName() }, tweeted)

	function tweeted (error, data, response) {
		if (error) throw new Error('Problem trying to tweet:', error.message)

		console.log('Tweeted: ' + data.text)
	}
}
