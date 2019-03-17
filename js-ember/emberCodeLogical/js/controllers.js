App.ApplicationController = Ember.Controller.extend({
	imageSrc: 'img/ico.png'
});

App.IndexController = Ember.ObjectController.extend({
	needs: ['decorating'],
	actions: {
		linkClicked: function () {
			this.transitionToRoute('about');
		},
		callDecoratingController: function () {
			this.get('controllers.decorating').send('popdie');
		},
		popup: function () {
			console.log('inside IndexController');
			alert('or Go Home!');
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
	search: '',
	info: {
		age: 26
	},
	/* Computed properties */
	fullName: function () {
		return this.get('firstName') + ' ' + this.get('lastName') +  ' is ' + this.get('info.age') + ' years old';
	}.property('firstName','lastName','info.age'),
	/* Observed property */
	firstNameChange: function () {
		console.log(this.get('firstName'));
		this.set('search',this.get('firstName'));
	}.observes('firstName')
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
	imageSrc: 'img/canary.png',
	imageHeight: '150px',
	description: 'Long ago, in a time forgotten, a preternatural event threw the seasons out of balance.',
	actions: {
		showRelease: function () {
			this.set('imageSrc','img/release.png');
		},
		showBeta: function () {
			this.set('imageSrc','img/beta.png');
		},
		showCanary: function () {
			this.set('imageSrc','img/canary.png');
		}
	}
});

App.MovieController = Ember.Controller.extend({
	actions: {
		handlerSubmit: function () {
			alert('Movie title: ' + this.get('title'));
		}
	}
});

App.DecoratingController = Ember.Controller.extend({
	needs: ['index'],
	actions: {
		callIndexController: function () {
			this.get('controllers.index').send('popup');
		},
		popdie: function () {
			console.log('inside DecoratingController');
			alert('All men must die');
		}
	}
});