/* Mixin */
MovieTracker.WatchedMixin = Ember.Mixin.create({
	isWatched: function()
	{
		var title = this.get('title'),
			watched = this.get('watched');
		return('Has ' + title + ' been watched? ' + watched);
	}
});

/* Model */
MovieTracker.Movie = Ember.Object.extend(MovieTracker.WatchedMixin, {
	/* begin properties */
	id: null,
	title: null,
	watched: false,
	rating: 0,
	/* end properties */

	/* Computed properties */
	titleAndRating: function() {
		return this.get('title') + ' has a rating of ' + this.get('rating');
	}.property('title', 'rating'),

	/* Observers */
	titleChanged: function() {
		$('#output').append('<p><strong>Movie title changed :</strong> ' + this.get('titleAndRating') + '</p><hr>');
	}.observes('title')
});

/* Inheritance */
MovieTracker.ActionMovie = MovieTracker.Movie.extend({
	genre: "action"
});
