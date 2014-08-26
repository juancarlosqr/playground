// (function ($) {
// 	if (!Modernizr.svg) {
// 		console.log('SVG not supported :(');
// 		$("img.logo").attr("src", "img/logo.png");
// 	}
// 	else {
// 		console.log('SVG support!');
// 	}
// })(jQuery);

HTML5App = Ember.Application.create();

HTML5App.Router.map(function() {
  this.route('tester' , {path : 'feature-test'});
  this.route('show' , {path : 'show-me'});
  this.route('docs' , {path : 'docs'});
});

// Objects
var Docs = Ember.Object.extend({
	text: ''
});
var Features = Ember.Object.extend({
	name: '',
	key: '',
	supported: false,
	resultClass: ''
});

// Routes
HTML5App.TesterRoute = Ember.Route.extend({
	model : function(){

		var features = [
			Features.create({
				name: 'Local Storage',
				key: 'localStorage',
				supported: false,
				resultClass: 'label label-danger'
			}),
			Features.create({
				name: 'Web Workers',
				key: 'workers',
				supported: false,
				resultClass: 'label label-danger'
			}),
			Features.create({
				name: 'SVG',
				key: 'svg',
				supported: false,
				resultClass: 'label label-danger'
			})
		];

		features.forEach(function(feature) {
	    	if ( feature.get('name') === 'SVG' ){
	        	feature.set('supported', Modernizr.svg);
	        	feature.set('resultClass', 'label label-success');
	    	}
		});

        return features;
    }
});

HTML5App.DocsRoute = Ember.Route.extend({
	model : function(){
        return docs = [
			Docs.create({
				text: 'http://css-tricks.com/using-svg/'
			})
		];
    }
});

