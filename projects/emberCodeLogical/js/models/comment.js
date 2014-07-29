App.Comment = DS.Model.extend({
    text: DS.attr(),
    article: DS.belongsTo('article')
});

App.CommentAdapter = DS.FixtureAdapter.extend({});

App.Comment.FIXTURES = [
    {
        id: 1,
        text: 'Great article',
        article: 3
    },
    {
        id: 2,
        text: 'Good tutorial',
        article: 1
    },
    {
        id: 3,
        text: 'Awesome!',
        article: 1
    }
];
