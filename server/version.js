//@ts-check
/// <reference path="./index.d.ts" />

let { log } = require('./logger');
let version = 'unknown';

try {
	let pk = JSON.parse(require('fs').readFileSync(`${__dirname}/../package.json`, 'utf8'));
	version = pk.version;
} catch (ex) { 
	log('debug version information failed:', ex.message, '\n', ex.stack);
}

module.exports = { version };