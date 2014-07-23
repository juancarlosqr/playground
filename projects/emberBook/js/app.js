var MovieTracker = Ember.Application.create();

MovieTracker.GravatarImageComponent = Ember.Component.extend({
	size: 100,
	email: '',
	gravatarUrl: function() {
		var email = this.get('email'),
		    size = this.get('size');
		return 'http://www.gravatar.com/avatar/' + hex_md5(email);
	}.property('email', 'size')
});
