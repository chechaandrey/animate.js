importScripts('../../lib/animate2dbridge.js');

var w = new Animate2DBridge({worker: self});

w.on('hello', function(data) {
	this.emit('test', data+'-is woker');
}, w)
