/*
 * args: {worker}
 */
function Animate2DEBridge(options) {
	
	options = options || {};
	var events = {}, worker;
	
	function __construct(opts) {
		if(opts['worker'] instanceof Animate2DEBridge) {
			worker = opts['worker'];
		} else {
			worker = new Animate2DEBridge({worker: this});
		}
	}
	
	this.get = function() {
		return worker;
	}
	
	this.on = function(type, callback, context) {
		events[type] = events[type] || [];
		if(typeof callback == 'function') events[type].push({context: context, callback: callback, one: false});
	}
	
	this.off = function(type,callback) {
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
		worker.trigger(type, [data]);
	}
	
	__construct.call(this, options);
	
}
