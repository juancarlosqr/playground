MovieTracker.Movie = Ember.Object.extend({
	id: null,
	title: null,
	watched: false,
	rating: 0
});

MovieTracker.ActionMovie = MovieTracker.Movie.extend({
	genre: "action"
});
