LigaScore.Country = DS.Model.extend({
    objectId: DS.attr(),
    name: DS.attr()
});

LigaScore.CountryAdapter = DS.FixtureAdapter.extend({});

LigaScore.Country.FIXTURES = [];
LigaScore.Country.FIXTURES = [
    {
        id: 1,
        objectId:'nwiecdweu',
        name: 'España'
    },
    {
        id: 2,
        objectId:'jsndkhisb',
        name: 'Inglaterra'
    }
];
