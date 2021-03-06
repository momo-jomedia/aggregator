/**
 * New node file
 */

/**
 * New node file
 */

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generate() {
	//return [ new Date().getTime(), String.fromCharCode(getRandomInt(97, 122)), getRandomInt(1, 1) ];
	return [ new Date().getTime(), String.fromCharCode(getRandomInt(97, 122)), 1 ];
}

var aggr = require('../../index');

var Aggregator = aggr.aggregator;
var r = new Aggregator(100);
var net = aggr.net;

net.socket(
	{
		aggregator: r, 
		protocol: aggr.protocol,
		fallback: aggr.fallback('/tmp/entrypoint.txt')
	}
).listen(1338,'127.0.0.1');



setInterval(function() {
	for(var i = 0; i < 10000; i++) {
		var b = generate();
		r.ingest('test', b[0], b[1], b[2]);
		var b = generate();
		r.ingest('test2', b[0], b[1], b[2]);
	
	}
}, 200);