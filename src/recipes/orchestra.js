export const orchestra = {
	orchestra: {
		items: [
			[
				'place', ' ', 'orchestraSpecialty', 'Orchestra',
				'orchestraSuffix',
			],
			[ 'place', ' Orchestra', 'orchestraSuffix' ],
			[ 'orchestraSpecialty', 'Orchestra', 'orchestraSuffix' ],
			[ 'orchestraSpecialty', 'Orchestra of ', 'generalPlace' ],
		],
	},
	orchestraSpecialty: {
		items: [
			[ 'orchestraSpecialtyPrefix', 'orchestraSpecialtyMain' ],
		],
	},
	orchestraSpecialtyPrefix: {
		items: [
			'Arcadia Peacock', 'Benson', 'Continental', 'Elite',
			'Hotel Astor', 'Hour of Charm', 'International', 'Jazzarimba',
			'Million Dollar', 'Party Dance', 'Royal', 'Specialty', 'Victor',
		],
		space:  'after',
		chance: 5,
	},
	orchestraSpecialtyMain: {
		items: [
			'All-Girl', 'Cafe', 'Calypso', 'Concert', 'Dance', 'Folk',
			'Hilo Hawaiian', 'Pier', 'Rainbo', 'Salon', 'Waltz',
		],
		space:  'after',
		chance: 5,
	},
	orchestraSuffix: {
		items: [
			'and Choir', 'De Luxe',
		],
		space:  'before',
		chance: 10,
	},
}
