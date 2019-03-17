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
  this.route('tester' , {path : 'features-test'});
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
				name: 'Web Workers',
				key: 'webworkers',
				supported: false
			}),
			Features.create({
				name: 'Local Storage',
				key: 'localstorage',
				supported: false
			}),
			Features.create({
				name: 'Offline web applications',
				key: 'applicationcache',
				supported: false
			}),
			Features.create({
				name: 'Geolocation',
				key: 'geolocation',
				supported: false
			}),
			Features.create({
				name: 'SVG',
				key: 'svg',
				supported: false
			}),
			Features.create({
				name: 'Inline SVG',
				key: 'inlinesvg',
				supported: false
			}),
			Features.create({
				name: 'Canvas',
				key: 'canvas',
				supported: false
			}),
			Features.create({
				name: 'Canvas text',
				key: 'canvastext',
				supported: false
			}),
			Features.create({
				name: 'Video',
				key: 'video',
				supported: false
			}),
			Features.create({
				name: 'Video WebM',
				key: 'video.webm',
				supported: false
			}),
			Features.create({
				name: 'Video Ogg Theora + Vorbis',
				key: 'video.ogg',
				supported: false
			}),
			Features.create({
				name: 'Video H.264 + AAC audio',
				key: 'video.h264',
				supported: false
			}),
			Features.create({
				name: 'Input Type Email',
				key: 'inputtypes.email',
				supported: false
			}),
			Features.create({
				name: 'Input Placeholder',
				key: 'input.placeholder',
				supported: false
			})
		];

		features.forEach(function(feature) {
	    	if ( feature.get('key') === 'webworkers' ){
	        	feature.set('supported', Modernizr.webworkers);
	    	}
	    	if ( feature.get('key') === 'localstorage' ){
	        	feature.set('supported', Modernizr.localstorage);
	    	}
	    	if ( feature.get('key') === 'applicationcache' ){
	        	feature.set('supported', Modernizr.applicationcache);
	    	}
	    	if ( feature.get('key') === 'geolocation' ){
	        	feature.set('supported', Modernizr.geolocation);
	    	}
	    	if ( feature.get('key') === 'svg' ){
	        	feature.set('supported', Modernizr.svg);
	    	}
	    	if ( feature.get('key') === 'inlinesvg' ){
	        	feature.set('supported', Modernizr.inlinesvg);
	    	}
	    	if ( feature.get('key') === 'canvas' ){
	        	feature.set('supported', Modernizr.canvas);
	    	}
	    	if ( feature.get('key') === 'canvastext' ){
	        	feature.set('supported', Modernizr.canvastext);
	    	}
	    	if ( feature.get('key') === 'video' ){
	        	feature.set('supported', Modernizr.video);
	    	}
	    	if ( feature.get('key') === 'video.webm' ){
	        	feature.set('supported', Modernizr.video.webm);
	    	}
	    	if ( feature.get('key') === 'video.ogg' ){
	        	feature.set('supported', Modernizr.video.ogg);
	    	}
	    	if ( feature.get('key') === 'video.h264' ){
	        	feature.set('supported', Modernizr.video.h264);
	    	}
	    	if ( feature.get('key') === 'inputtypes.email' ){
	        	feature.set('supported', Modernizr.inputtypes.email);
	    	}
	    	if ( feature.get('key') === 'input.placeholder' ){
	        	feature.set('supported', Modernizr.input.placeholder);
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

