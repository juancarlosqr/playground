App.Person = DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    age: DS.attr()
});

App.PersonAdapter = DS.FixtureAdapter.extend({});

App.Person.FIXTURES = [
    {
        id: 1,
        firstName: 'Jhon',
        lastName: 'Doe',
        age: 23
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
        id: 4,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 22
    },
    {
        id: 5,
        firstName: 'Zinedine',
        lastName: 'Zidane',
        age: 38
    }
];
