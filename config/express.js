module.exports = function() {
	var express = require('express');
	var app = express();
	
	app.set('views', './app/views');	
	app.set('view engine', 'ejs');

	return app;
}
