var app = require('./config/express')();
var productsRoutes = require('./app/routes/products')(app);

app.set('view engine', 'ejs');

app.listen(3000, function(){
	console.log("Servidor rodando");
});
