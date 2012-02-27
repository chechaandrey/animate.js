function Animate2DBackEnd(options) {
	
	options = options || {};
	var canvases = [];
	
	function __construct(opts) {
		
	}
	
	this.createCanvas = function(opts) {
		return new Animate2DCanvas(opts);
	}
	
	this.destroyCanvas = function() {
		
	}
	
	
	
	function Animate2DCanvas(options) {
		
		options = options || {};
		var sprites = [];
		
		function __construct(opts) {
			
		}
		
		this.createSprite = function(opts) {
			return this.append(opts);
		}
		
		this.destroySprite = function(sprite) {
			return this.remove(sprite);
		}
		
		this.append = function(sprite) {
			var nsprite;
			if(!(sprite instanceof Animate2DSprite)) nsprite = new Animate2DSprite(sprite); else nsprite = sprite;
			sprites.push(nsprite);
			return nsprite;
		}
		
		this.prepend = function(sprite) {
			var nsprite;
			if(!(sprite instanceof Animate2DSprite)) nsprite = new Animate2DSprite(sprite); else nsprite = sprite;
			sprites.unshift(nsprite);
			return nsprite;
		}
		
		this.remove = function(sprite) {
			if(!(sprite instanceof Animate2DSprite)) return this;
			for(var i=0; i<sprites.length; i++) {
				if(sprites[i] == sprites) {
					sprites.splice(i, 1);
					sprite = null;
				}
			}
			return this;
		}
		
		this.render = function() {
			
		}
		
		__construct.call(this, options);
		
	}
	
	function Animate2DSprite(options) {
		
		options = options || {};
		
		function __construct(opts) {
			
		}
		
		this.off = function(type, callback) {
			
		}
		
		this.on = function(type, callback) {
			
		}
		
		this.one = function(type, callback) {
			
		}
		
		this.trigger = function(type, data) {
			
		}
		
		this.style = function() {
			
		}
		
		this.append = function(sprite) {
			
		}
		
		this.prepend = function(sprite) {
			
		}
		
		this.remove = function(sprite) {
			
		}
		
		this.empty = function() {
			
		}
		
		this.before = function(sprite) {
			
		}
		
		this.after = function(sprite) {
			
		}
		
		this.clone = function() {
			
		}
		
		this.id = function() {
			
		}
		
		this.parent;
		
		this.children;
		
		this.each = function() {
			
		}
		
		this.animate = function(name, options) {
			
		}
		
		__construct.call(this, options);
		
	}
	
	function Animste2DAnimate(options) {
		
		function __construct(opts) {
			
		}
		
		this.stop = function() {
			
		}
		
		this.start = function() {
			
		}
		
		this.pause = function() {
			
		}
		
		__construct.call(this, options);
		
	}
	
	
	
	__construct.call(this, options);
	
}
