const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const config = require('./config');

const util = require('./util/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if(config.enableCors) {
	app.use(util.cors);
}

util.db(() => {
	
});

app.listen(config.port, () => {
	console.log(`server running at port ${config.port}`);
});