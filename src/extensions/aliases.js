!function(win, doc, undefined) {
	if ( typeof define === 'function' && define.amd ) {
		define(["../easria"], _do);
	} else {
		_do(win.easria);
	}


	function _do(easria) {
		easria.show = function(nodes) {
			easria('hidden', false, nodes);
		}

		easria.hide = function(nodes) {
			easria('hidden', true, nodes);
		}
	}
	
}(window, document, void 0);