LigaScore.Tournament = DS.Model.extend({
	name: DS.attr('string'),

	country: DS.belongsTo('country', {async: true}),
	editions: DS.hasMany('edition', {async:true})
});

LigaScore.TournamentAdapter = DS.FixtureAdapter.extend({});

LigaScore.Tournament.FIXTURES = [
	{
		id:1,
		name: 'Liga BBVA',
		country:1,
		editions:[11]
	},
	{
		id:2,
		name: 'Copa del Rey',
		country:1,
		editions:[13]
	},
	{
		id:3,
		name: 'Barclays Premier League',
		country:2,
		editions:[12]
	}
];
