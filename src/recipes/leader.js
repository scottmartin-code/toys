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
			[ 'leaderName', 'singularPossessiveUngendered' ],
		],
	},
	leaderName: {
		items: [
			[ 'maleName' ],
			[ 'femaleName' ],
		],
	},
	singularPossessiveFemale: {
		items: [
			[ ' and her ' ],
		],
	},
	singularPossessiveMale: {
		items: [
			[ ' and his ' ],
		],
	},
	pluralPossessive: {
		items: [
			[ ' and their ' ],
		],
	},
	singularPossessiveUngendered: {
		items: [
			[ '\'s ' ],
			[ ' and the ' ],
			[ ' with the ' ],
		],
	},
	femaleLeaderAndHer: {
		items: [
			[ 'femaleName', 'singularPossessiveFemale' ],
		],
	},
	maleLeaderAndHis: {
		items: [
			[ 'maleName', 'singularPossessiveMale' ],
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
