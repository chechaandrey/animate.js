ew.on('hello', function(data) {
	this.emit('test', data+'-is woker');
}, ew)
