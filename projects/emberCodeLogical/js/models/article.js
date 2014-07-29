App.Article = DS.Model.extend({
    title: DS.attr(),
    body: DS.attr(),
    comments: DS.hasMany('comment', {async: true})
});

App.ArticleAdapter = DS.FixtureAdapter.extend({});

App.Article.FIXTURES = [
    {
        id: 1,
        title: 'Introduction to Ember JS Part 1',
        body: 'Ember.Application.create',
        comments: [2,3]
    },
    {
        id: 2,
        title: 'Introduction to Ember JS Part 2',
        body: 'Ember.Route.extend',
        comments: []
    },
    {
        id: 3,
        title: 'Introduction to Ember JS Part 3',
        body: 'Ember.Controller.extend',
        comments: [1]
    },
    {
        id: 4,
        title: 'Introduction to Ember JS Part 4',
        body: 'DS.Model.extend',
        comments: []
    }
];
