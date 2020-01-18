export const leader = {
	leaderPossessiveOrThe: {
		items: [
			[ 'leaderSingularPossessive' ],
			[ 'leaders', ' and their ' ],
			[ 'The ' ],
		],
	},
	leaderSingularPossessive: {
		items: [
			[ 'femaleLeaderAndHer' ],
			[ 'maleLeaderAndHis' ],
			[ 'lastName', '\'s ' ],
			[ 'leaderName', '\'s ' ],
			[ 'leaderName', ' and the ' ],
			[ 'leaderName', ' with the ' ],
		],
	},
	femaleLeaderAndHer: {
		items: [
			[ 'femaleLeaderName', ' and her ' ],
		],
	},
	maleLeaderAndHis: {
		items: [
			[ 'maleLeaderName', ' and his ' ],
		],
	},
	leaders: {
		items: [
			[ 'maleLeaderName', ' and ', 'maleLeaderName' ],
			[ 'maleFirstName', ' and ', 'maleLeaderName' ],
			[ 'femaleFirstName', ' and ', 'femaleLeaderName' ],
			[ 'lastName', ' and ', 'lastName' ],
			[ 'The ', 'lastName', ' ', 'siblings' ],
			[ 'The King\'s Jesters' ],
		],
	},
	leaderName: {
		items: [ [ 'maleLeaderName' ], [ 'femaleLeaderName' ] ],
	},
	femaleLeaderName: {
		items: [ [ 'femaleFirstName', ' ', 'lastName' ] ],
	},
	maleLeaderName: {
		items: [
			[ 'adjective', 'maleFirstName', ' ', 'lastName', 'honorific' ],
			[
				'maleFirstName', ' ', 'middleInitialOrNickname', 'lastName',
				'honorific',
			],
		],
	},
	siblings: {
		items: [ 'Brothers', 'Sisters' ],
	},
}
