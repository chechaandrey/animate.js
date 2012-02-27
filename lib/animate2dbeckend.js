function Animate2DBackEnd(options) {
	
	options = options || {};
	var canvases = {}, work;
	
	function __construct(opts) {
		
	}
	
	this.createCanvas = function(opts) {
		var canvas = new Animate2DBackendCanvas(opts);
		var id = canvas.id();
		canvases[id] = canvas;
		work.emit('sys:canvas', {op: 'create', id: id});
		return canvas;
	}
	
	this.destroyCanvas = function(canvas) {
		var id = null;
		if(canvas && typeof canvas == 'object') {
			canvas.__destroy();
			for(var i in canvases) {
				if(canvases[i] == canvas) delete canvases[i];
			}
			canvas = null;
		} else {
			if(canvases[canvas]) {
				canvases[canvas].__destroy();
				delete canvases[canvas];
			}
		}
		
		if(id) work.emit('sys:canvas', {op: 'destoy', id: id});
		
		return this;
	}
	
	this.set = function(worker) {
		if((worker instanceof Animate2DEBridge) || (worker instanceof Animate2DBridge)) {
			work = worker;
		}
	}
	
	__construct.call(this, options);
	
}
