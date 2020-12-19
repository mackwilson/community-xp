const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
var router = express.Router()
const port = process.env.PORT || 8000;

app.use('/ping', function(req, res) {
  res.status(200).send('ok');
});
app.use('/api', router);

routes(router);

app.listen(port, function() {
	console.log('server running in port ' + port);
});