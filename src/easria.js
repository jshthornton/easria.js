!function(win, doc, undefined) {
	var easria;


	if ( typeof define === 'function' && define.amd ) {
		define([
			"jquery"
		], function ($) { 
			_do($);

			return easria; 
		});
	} else {
		_do($);
		
		win.easria = easria;
	}

	function _do($) {
		easria = function(name, value, nodes) {
			var $nodes = ($.isArray(nodes)) ? easria._getNodes(nodes) : nodes;

			if(easria['__' + name] !== undefined) {
				easria['__' + name]();
			} else {
				easria._raw($nodes, name, value);
			}
		};

		easria._getNodes = function(args) {
			var len = args.length;

			if(len === 0) return $();
			if(len === 1) return args[0];

			var $set = $();
			for(var i = 0; i < len; i++) {
				var $nodes = args[i];
				$set = $set.add($nodes);
			}

			return $set;
		};

		easria._raw = function($nodes, name, value) {
			$nodes.attr('aria-' + name, value);
		};
	}
	
}(window, document, void 0);