const express = require('express');
const bodyParser = require('body-parser');
require('./App/DB');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./App/Routes')(app);
app.get("/", (req, res) => {
	res.json({
		message: "Make an API with Node.JS, MongoDB, and JWT Authentication With Harsh Kagathara"
	});
});

app.listen(3000, () => {
	console.log('Server Started at PORT : 3000');
});