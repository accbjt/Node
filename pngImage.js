var fs = require('fs');
var sys = require('sys');
var png = require('png').Png;

var width = 512;
var height = 512;

var rgb = new Buffer(width*height*3);

for(var i=0; i<height; i++){
	for (var j=0; j<width; j++){
		gb[i*width*3 + j*3 + 0] = 128*i*j/255;
        rgb[i*width*3 + j*3 + 1] = 128*i*j/255;
        rgb[i*width*3 + j*3 + 2] = 0;
	}
}

var myImage = new png(rgb, width, height, 'rgb');

fs.writeFileSync('output.png', myimage.encodeSync().toString('binary'), 'binary');