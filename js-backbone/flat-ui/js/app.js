Book = Backbone.Model.extend({
	urlRoot: 'http://localhost:1337/books/',

    initialize: function() {
        console.log('We have a new book!');

        this.on("change", function(){
			console.log('Model Changed');
			console.log('Changed attributes: ' + JSON.stringify(this.changed));
			console.log('Previous attributes: ' + JSON.stringify(this.previousAttributes()));

			if(this.hasChanged('name')){
				console.log('The name has changed from ' + this.previous('name') + ' to ' 
					+ this.get('name'));
			} 

		});

		this.on("change:year", function(){
			console.log('Year Changed');
		});

		this.on("invalid", function(model, error){
			console.log("** Validation Error : " + error + " **");
		});
    },

    defaults: {
        name: 'Not Specified',
        author: 'Not Specified',
        isbn: 'Not Specified'
    },

	validate: function(attrs){
		if(attrs.year < 2000){
			return 'Year must be after 2000';
		}
		if(!attrs.name){
			return 'A name must be provided';
		}
	},

	// custom methods

	doSave: function () {
		this.save(this.attributes,
		{
			success: function(model, response, options)
			{
				console.log('Book saved!');
				console.log('Created at: ' + model.get('createdAt') + ' with id ' + model.get('id'));
			},
			error: function(model, xhr, options)
			{
				console.log('Failed to save book');
			}
		});
	},

    printDetails: function() {
		console.log(this.get('name') + ' by ' + this.get('author'));
	},

	getDetails: function() {
		return this.get('name') + ' by ' + this.get('author');
	}
});

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$('#save').on('click', function(e)
{
	e.preventDefault();
	var myObj = $('#form-new-book').serializeObject();
	var myBook = new Book();
	myBook.set('name',myObj.name,{validate:true});
	myBook.set('author',myObj.author,{validate:true});
	myBook.set('isbn',myObj.isbn,{validate:true});
	myBook.save(myBook.attributes,
	{
		success: function(model, response, options)
		{
			$('#msg-result').text('Book saved! ' + model.getDetails());
			$('#msg-wrapper').slideDown().addClass('alert-success');
		},
		error: function(model, xhr, options)
		{
			$('#msg-result').text('Failed to save book');
			$('#msg-wrapper').slideDown().addClass('alert-danger');
		}
	});
});
