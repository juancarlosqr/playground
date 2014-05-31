requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery.min',
        handlebars: 'vendor/handlebars-v1.3.0',
        utils: 'helpers/utils',
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

requirejs(['jquery', 'handlebars', 'utils'], function($, Handlebars, Util)
{
    console.log('jQuery: ' + $.fn.jquery);
    console.log('Handlebars: ' + Handlebars.VERSION);
    console.log(Util.greeting);

	var libs = ['jquery', 'require', 'handlebars'];

	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var data     = { title : "js is here!", dep : libs };
	$('#wrapper').html(template(data));
});