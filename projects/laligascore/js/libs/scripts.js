$('[data-toggle=collapse]').on('click', function(e){
	e.preventDefault();
  	$(this).find("i").toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
});