const express = require("express");
var path = require('path');
require('dotenv').config();

const index = require('./routes/index');
const api_key = require('./routes/api_key');

const app = express();

const port = process.env.PORT || 3838;

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api_key', api_key);

app.listen(port, function server(err) {
	if (err) {
		console.log(error);
		process.exit(1);
	}
	console.log(`Server is listening on port ${port}`);
})