LigaScore.Team = DS.Model.extend({
	name: DS.attr('string'),
	nameshort: DS.attr('string'),
	logourl: DS.attr('attr'),

	country: DS.belongsTo('country', {async:true})
});

LigaScore.TeamAdapter = DS.FixtureAdapter.extend({});

LigaScore.Team.FIXTURES = [
	{
		id:31,
		name: 'Real Madrid',
		nameshort: 'RMA',
		logourl:'resources/1.jpg',
		country: 1 
	},
	{
		id:32,
		name: 'Atletico de Madrid',
		nameshort: 'ATM',
		logourl:'resources/42.jpg',
		country: 1 
	},
	{
		id:33,
		name: 'Barcelona',
		nameshort: 'BCN',
		logourl:'resources/3.jpg',
		country: 1 
	},
	{
		id:34,
		name: 'Manchester United',
		nameshort: 'MUN',
		logourl:'resources/67.jpg',
		country: 2 
	},
	{
		id:35,
		name: 'Chelsea',
		nameshort: 'CHL',
		logourl:'resources/58.jpg',
		country: 2 
	}
]