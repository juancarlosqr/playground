App = Ember.Application.create();

/* Custom Helpers */
Ember.Handlebars.helper('makeReview', function (value, option) {
	return value.substr(0, 8) + ' ...';
});