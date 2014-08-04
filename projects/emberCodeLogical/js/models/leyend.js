App.Leyend = DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    age: DS.attr()
});

App.LeyendAdapter = DS.FixtureAdapter.extend({});

App.Leyend.FIXTURES = [
    {
        id: 1,
        firstName: 'Roger',
        lastName: 'Federer',
        age: 36
    },
    {
        id: 2,
        firstName: 'Michael',
        lastName: 'Jordan',
        age: 45
    },
    {
        id: 3,
        firstName: 'Derek',
        lastName: 'Jeter',
        age: 35
    },
    {
        id: 5,
        firstName: 'Zinedine',
        lastName: 'Zidane',
        age: 38
    }
];
