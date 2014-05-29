var Show = Backbone.Model.extend({
    urlRoot: '/show',
    initialize: function(){
        console.log('New Show. Hi five!');
    },
    defaults: {
        name: 'Game of Thrones',
        synopsis: 'Valar Morghulis',
        releaseDate: 2011
    }
});

var ShowsCollection = Backbone.Collection.extend({
	urlRoot: '/shows',
	model: Show,
	getOld: function (year) {
		return this.filter(function(show) { 
		    return show.get('releaseDate') < year;
	    });
	},
	print: function () {
		this.each(function(show) { 
		    console.log( show.get('name') + ' was released in ' + show.get('releaseDate') + ' ( ' + show.get('synopsis') + ' )' ); 
	    });
	}
});

var ShowView = Backbone.View.extend({

  el: '#wrapper',
  // It's the first function called when this view it's instantiated.
  initialize: function(){
    this.render();
  },
  // $el - it's a cached jQuery object (el), in which you can use jQuery functions 
  //       to push content. Like the Hello World in this case.
  render: function(){
  	this.$el.html('<h3>Backbone is here! <small>' + this.model.get('synopsis') + ' (check the console)</small></h3>');
  }

});


(function($){

	$('#start').on('click', function (e) {

		e.preventDefault();
		var showOne = new Show;
		// var myShows = new ShowsCollection;
		var myShows = new ShowsCollection([showOne]);
		// myShows.push(showOne);
		// myShows.fetch();
		// myShows.get(0);

		console.log(myShows.getOld(2012));
		myShows.print();

		var showTwo = new Show({'name':'Silicon Valley','releaseDate':2014,'synopsis':'Minimum Viable Product'});
		myShows.push(showTwo);
		myShows.print();
		// console.log(values);
		// console.log(show.get('name'));

		// show.set({'name':'Dracarys'});

		// console.log(show.get('name'));

		console.log(myShows.models);
		
		var showView = new ShowView({model: showOne});
		showOne.save();

	})
})(jQuery);