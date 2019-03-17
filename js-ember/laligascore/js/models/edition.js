LigaScore.Edition = DS.Model.extend({
	name: DS.attr('string'),

	tournament: DS.belongsTo('tournament')
});

LigaScore.EditionAdapter = DS.FixtureAdapter.extend({});

LigaScore.Edition.FIXTURES = [
	{
		id:11,
		name: 'Temporada 2014-2015',
		tournament:1,
	},
	{	
		id:12,
		name: 'Season 2014-2015',
		tournament:3,
	},
	{	
		id:13,
		name: 'Temporada 2014-2015',
		tournament:2,
	}
];
