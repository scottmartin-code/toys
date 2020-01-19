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
	leaderName: {
		items: [ [ 'maleName' ], [ 'femaleName' ] ],
	},
	femaleLeaderAndHer: {
		items: [
			[ 'femaleName', ' and her ' ],
		],
	},
	maleLeaderAndHis: {
		items: [
			[ 'maleName', ' and his ' ],
		],
	},
	leaders: {
		items: [
			[ 'maleName', ' and ', 'maleName' ],
			[ 'maleFirstName', ' and ', 'maleName' ],
			[ 'femaleFirstName', ' and ', 'femaleName' ],
			[ 'lastName', ' and ', 'lastName' ],
			[ 'The ', 'lastName', ' ', 'siblings' ],
			[ 'The King\'s Jesters' ],
		],
	},
	siblings: {
		items: [ 'Brothers', 'Sisters' ],
	},
}
