/**
 * BundleUp
 * Operation BundleUp provides warm coats and winter wear to those who
 * need them most.
 *
 * @package  bundleup
 * @version  0.0.1
 * @author   Scott Szarapka
 * @url      www.operationbundleup.com
 * @copyright Copyright ©2013 BundleUp.
 */

// module dependencies
var express     = require('express');
var routes      = require('./routes');
var http        = require('http');
var path        = require('path');

var app         = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/media', routes.media);
app.get('/cities', routes.cities);
app.get('/team', routes.team);

http.createServer(app).listen(app.get('port'), function(){
  console.log('BundleUp server listening on port ' + app.get('port'));
});

// For Testing Support
module.exports = app;