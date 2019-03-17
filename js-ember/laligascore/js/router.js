LigaScore.Router.map(function() {
    this.resource('countries' , {path : 'paises'});
    this.resource('tournaments' , {path : 'torneos'});
    this.resource('editions' , {path : 'ediciones'});
    this.resource('teams' , {path : 'equipos'});
    // this.resource('smartphones',{path: 'smartphones'}, function () {
    //     this.route('new', {path: 'new'});
    // });
});

LigaScore.CountriesRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('country');
    }
});

LigaScore.TournamentsRoute = Ember.Route.extend({
    model: function () {
        return {
        	model: this.store.find('tournament'),
        	countries: this.store.find('country')
        };
    }
});

LigaScore.EditionsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('edition');
    }
});

LigaScore.TeamsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('team');
    }
});
