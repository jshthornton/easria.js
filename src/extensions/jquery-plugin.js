!function(win, doc, undefined) {
	if ( typeof define === 'function' && define.amd ) {
		define([
			"../easria",
			"jquery"
		], _do);
	} else {
		_do(win.easria);
	}


	function _do(easria, $) {
		$.fn.easria = function(name, value) {
			easria(name, value, [this]);
		}
	}
	
}(window, document, void 0);