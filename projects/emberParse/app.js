var App = Ember.Application.create();

App.ApplicationAdapter = EmberParseAdapter.Adapter.extend({
  applicationId: 'TEG26lWfthbf4tDeEQQPXUHPgW5ea1IOwDXoK3tn',
  restApiId: 'CeMD0At1mS7lEn7KdoweXKxYSXoMWxlxXnu9v9D1',
  javascriptId: 'l7Kxhq22iNJ3G1U393KZcgUvLdauQlGCWTh58Pzp'
});

App.Router.map(function(){
  this.route('new');
  this.route('edit', {path: ':edit_id'});
});

App.Todo = DS.Model.extend({
  description: DS.attr('string')
});

App.ApplicationRoute = Ember.Route.extend({
  actions: {
    save: function(todo){
      var route = this;
      return todo.save().then(function(){
        route.transitionTo('index');
      });
    }
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('todo');
  }
});

App.NewRoute = Ember.Route.extend({
  model: function(){
    return this.store.createRecord('todo');
  }
});