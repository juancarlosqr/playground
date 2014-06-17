
var FooModule = FooModule || {};

FooModule = (function() {

	// private function
	function process( msg )
	{
		return "JS is here! " + msg;
	}

	var module = {};

	module.doProcess = function( msg )
	{
		return process(msg);
	};

	return module;
})();