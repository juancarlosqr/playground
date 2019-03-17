LigaScore.Country = DS.Model.extend({
    objectId: DS.attr('string'),
    name: DS.attr('string'),

    tournaments: DS.hasMany('tournament', {async: true}),
    teams: DS.hasMany('team', {async: true})
});

LigaScore.CountryAdapter = DS.FixtureAdapter.extend({});

LigaScore.Country.FIXTURES = [
    {
        id: 1,
        objectId:'nwiecdweu',
        name: 'España',
        tournaments: [1,2],
        teams: [31,32,33]
    },
    {
        id: 2,
        objectId:'jsndkhisb',
        name: 'Inglaterra',
        tournaments: [3],
        teams: [34,35]
    }
];
