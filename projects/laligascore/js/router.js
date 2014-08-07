LigaScore.Router.map(function() {
    this.resource('countries' , {path : 'paises'});
    this.resource('tournaments' , {path : 'torneos'});
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
