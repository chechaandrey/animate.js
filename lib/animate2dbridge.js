/*
 * args: {worker}
 */
function Animate2DBridge(options) {
	
	options = options || {};
	var worker, events = {};
	
	function __construct(opts) {
		if(typeof opts['worker'] == 'object' || typeof opts['worker'] == 'function') {
			worker = opts['worker'];
		} else if(opts['worker']) {
			worker = window.Worker?new Worker(opts['worker']):null;
		} else {
			worker = null;
		}
		if(worker) {
			var self = this;
			worker.onmessage = function(event) {
				var data = event.data || {};
				self.trigger(data.action, [data.data]);
			}
			worker.onerror = function(event) {
				self.trigger('error', [{filename: event.filename, lineno: event.lineno, message: event.message}]);
			}
		}
	}
	
	this.get = function() {
		return worker;
	}
	
	this.on = function(type, callback, context) {
		events[type] = events[type] || [];
		if(typeof callback == 'function') events[type].push({context: context, callback: callback, one: false});
	}
	
	this.off = function(type, callback) {
		events[type] = events[type] || [];
		if(typeof callback == 'function') {
			for(var i=0; i<events[type].length; i++) {
				if(callback == events[type][i]['callback']) events[type].splice(i, 1);
			}
		} else {
			events[type] = [];
		}
	}
	
	this.one = function(type, callback, context) {
		events[type] = events[type] || [];
		if(typeof callback == 'function') events[type].push({context: context, callback: callback, one: true});
	}
	
	this.trigger = function(type, data) {
		if(events[type] instanceof Array) {
			for(var i=0; i<events[type].length; i++) {
				events[type][i]['callback'].apply(events[type][i]['context'], data || []);
				if(events[type][i]['one']) this.off(type, events[type][i]['callback']);
			}
		}
	}
	
	this.emit = function(type, data) {
		worker.postMessage({action: type, data: data});
	}
	
	__construct.call(this, options);
	
}
