MovieTracker.ApplicationController = Ember.Controller.extend({
    actions :{
        saveStatic : function(){
        	var comedyMovie = MovieTracker.Movie.create({
				title: 'A Comedy Movie',
				rating: 5
			});

			var msg = 'New movie created : ' + comedyMovie.get('titleAndRating');

			$('#output').append('<p>' + msg + '</p><hr>');
        },
        changeStatic : function(){
        	var comedyMovie = MovieTracker.Movie.create({
				title: 'X-Men',
				rating: 5
			});

			var msg = 'New movie created : ' + comedyMovie.get('titleAndRating');

			$('#output').append('<p>' + msg + '</p><hr>');

			setTimeout(function() { 
				comedyMovie.set('rating', 4.5);
				/* trigger observer */
				comedyMovie.set('title', 'Wolverine');
			}, 2000);
        }
    }
});

// MovieTracker.moviesController = Ember.ArrayController.create({
// 	content: [],
// 	init: function(){
// 		this._super();
// 		var list = [
// 			MovieTracker.Movie.create({
// 				title: 'Movie 1',
// 				rating: 4
// 			}),
// 			MovieTracker.Movie.create({
// 				title: 'Movie 2',
// 				rating: 5
// 			})
// 		];
// 		this.set('content', list);
// 	}
// });

// MovieTracker.selectedMovieController = Ember.ObjectController.create({
// 	selectedMovie: [],
// 	select: function(item) {
// 		this.set('selectedMovie', item);
// 	},
// 	toggleWatched: function() {
// 		this.selectedMovie.toggleProperty('watched');
// 	}
// });

