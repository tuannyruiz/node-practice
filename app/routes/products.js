module.exports = function(app) {
  app.get('/produtos', function(req, res){
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'dashboard_nodejs'
	});

	connection.query('select * from books', function(err, result){
		res.send(results);
	});

	connection.end();
  });
};
