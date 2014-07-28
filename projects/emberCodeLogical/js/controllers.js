App.IndexController = Ember.ObjectController.extend({
	actions: {
		linkClicked: function () {
			this.transitionToRoute('about');
		}
	}
});

App.AboutController = Ember.Controller.extend({
	username: 'juancarlosqr',
	actions: {
		pClicking: function () {
			alert('Yes i am!');
		}
	}
});

App.DataBindingController = Ember.Controller.extend({
	firstName: 'juan carlos',
	lastName: 'quintero',
	info: {
		age: 26
	}
});

App.TeamsController = Ember.Controller.extend({
	actions: {
		addNewItem: function () {
			this.get('model').pushObject('Inter de Milan');
		}
	}
});

/* We dont use this, so ember create the Object */
// App.PlayerController = Ember.Controller.extend({ });

App.SetGetController = Ember.Controller.extend({
	title: 'X-Men',
	genre: 'Science Fiction',
	actions: {
		showInfo: function () {
			alert('Title: ' + this.get('title') + '\nGenre: ' + this.get('genre') );
		},
		changeInfo: function () {
			this.set('title', 'X-Men: Days of Future Past');
		},
		defaultInfo: function () {
			this.set('title', 'X-Men');
		}
	}
});

App.HelpersController = Ember.Controller.extend({
	firstInput: 'juancarlosqr',
	imageSrc: 'img/ico.png',
	description: 'Long ago, in a time forgotten, a preternatural event threw the seasons out of balance.'
});

/* Custom Helper */
Ember.Handlebars.helper('makeReview', function (value, option) {
	return value.substr(0, 8) + '...';
});