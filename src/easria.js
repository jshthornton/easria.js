!function(win, doc, undefined) {
	var easria = function(name, value, nodes) {
		var els = ($.isArray(nodes)) ? nodes : [nodes],
			$nodes = easria._getNodes(els);

		if(easria['__' + name] !== void 0) {
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


	if ( typeof define === 'function' && define.amd ) {
		define([], function () { return easria; } );
	} else {
		win.easria = easria;
	}
	
}(window, document, void 0);