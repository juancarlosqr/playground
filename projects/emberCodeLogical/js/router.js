App.Router.map(function() {
  this.route('index', {path: '/'});
  this.route('about', {path: 'about-me'});
  this.route('data-binding', {path: 'data-binding-101'});
  this.route('teams', {path: 'teams'});
  this.route('player', {path: 'player'});
  this.route('redirect', {path: 'redirect'});
  this.route('set-get', {path: 'setters-getters'});
  this.route('helpers', {path: 'helpers'});
  this.route('leyends', {path: 'leyends'});
  this.route('blog', {path: 'blog'});
  this.route('article', {path: 'articles/:article_id'});
  this.route('people', {path: 'people'});
  /* using a different param name instead of the convention name (:person_id) */
  this.route('person', {path: 'people/:fixed_id'});
  this.route('movie', {path: 'movie'});
  this.route('decorating', {path: 'decorating'});
  this.resource('smartphones',{path: 'smartphones'}, function () {
  	this.route('new', {path: 'new'});
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['Ember', 'Parse', 'Android'];
  }
});

App.AboutRoute = Ember.Route.extend({
	renderTemplate: function () {
		this.render('acerca');
	}
});

/* We dont use this, so ember create the Object */
// App.DataBindingRoute = Ember.Route.extend({ });

App.TeamsRoute = Ember.Route.extend({
	model: function () {
		return ['Real Madrid', 'Bayern Munich', 'Arsenal'];
	}
});

App.PlayerRoute = Ember.Route.extend({
	model: function () {
		return {
			name: 'Isco',
			number: 23
		}
	}
});

App.RedirectRoute = Ember.Route.extend({
	redirect: function () {
		this.transitionTo('about');
	}
});

App.LeyendsRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('leyend');
	}
});

App.BlogRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('article');
	}
});

App.PeopleRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('person');
	}
});

/*
Dynamic url segment
if we use the parameter convention name the next route definition wouldn't be necessary
*/
App.PersonRoute = Ember.Route.extend({
	model: function (params) {
		return this.store.find('person', params.fixed_id);
	}
});

/* Decorating Controllers */
App.DecoratingRoute = Ember.Route.extend({
	model: function () {
		return ['Daenerys Targaryen', 'Arya Stark', 'Tyrion Lannister'];
	},
	setupController: function (controller, model) {
		controller.set('model', model);
		controller.set('morghulis', 'Valar Morghulis');
	}
});

/* Nested Routes */
App.SmartphonesIndexRoute = Ember.Route.extend({
	model: function () {
		return ['Nexus 5', 'iPhone 5', 'Samsung Galaxy 5S'];
	}
});