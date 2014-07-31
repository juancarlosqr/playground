App.Person = DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    email: DS.attr()
});

/* RESTAdapter is the default Ember Adapter */
// App.PersonAdapter = DS.RESTAdapter.extend({});

App.PersonAdapter = DS.FixtureAdapter.extend({});

App.Person.FIXTURES = [
    {
        id: 1,
        firstName: 'Jhon',
        lastName: 'Doe',
        email: 'jhon.doe@emberjscss.com'
    },
    {
        id: 2,
        firstName: 'Michael',
        lastName: 'Stewart',
        email: 'michael.stewart@emberjscss.com'
    },
    {
        id: 3,
        firstName: 'Derek',
        lastName: 'Smith',
        email: 'derek.smith@emberjscss.com'
    },
    {
        id: 4,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@emberjscss.com'
    },
    {
        id: 5,
        firstName: 'Ryan',
        lastName: 'Dale',
        email: 'ryan.dale@emberjscss.com'
    }
];
