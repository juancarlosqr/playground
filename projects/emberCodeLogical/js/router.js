App.Router.map(function() {
  this.route('index', {path: '/'});
  this.route('about', {path: 'about-me'});
  this.route('data-binding', {path: 'data-binding-101'});
  this.route('teams', {path: 'teams'});
  this.route('player', {path: 'player'});
  this.route('redirect', {path: 'redirect'});
  this.route('set-get', {path: 'setters-getters'});
  this.route('helpers', {path: 'helpers'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
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
