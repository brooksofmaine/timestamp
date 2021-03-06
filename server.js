
// special thanks to Raphael Rodriguez for providing a model
'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./app/routes/index.js');
var api = require('./app/api/timestamp.js');

//configure app, which is secretly express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));
//app.use('/public', express.static(process.cwd() + '/public'));
var port = process.env.PORT || 8080;
//.listen(process.env.PORT || 5000)

routes(app);
api(app);

app.listen(port, function(){
  console.log('listening on ' + process.env.PORT);
});
