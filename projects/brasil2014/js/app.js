;
(function ($, modulo) {

	var msg = modulo.doProcess("valar morghulis");
	console.log(msg);
	$('#log').text(msg);

})(jQuery, FooModule);
