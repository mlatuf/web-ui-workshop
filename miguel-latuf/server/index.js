var express = require('express'),
  path = require('path'),
  { resolve } = require('path'),
  Twit = require('twit');

const logger = require('./util//logger');

const argv = require('./util/argv');
const port = require('./util//port');
const setup = require('./middlewares/frontendMiddleware');

var app = express();
var appFE = express();
var T = new Twit(require('./keys.json'));

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.configure(function() {
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(allowCrossDomain);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.use(express.static(path.join(__dirname, 'public')));
});

// In production we need to pass these values in instead of relying on webpack
setup(appFE, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
});

/**
 * Root
 */
app.get('/', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.send('Twitter API is running...');
});

//http://localhost:8080/timeline?count=100
app.get('/timeline', function(req, res) {
  T.get('statuses/home_timeline', req.query, function(err, data, response) {
    return res.json(data);
  });
});

//http://localhost:8080/myplace?lat=-38.7116780&long=-62.2680780
app.get('/myplace', function(req, res) {
  console.log(req);
  T.get('/trends/closest', req.query, function(err, data, response) {
    return res.json(data);
  });
});

//http://localhost:8080/trends?id=23424747
app.get('/trends', function(req, res) {
  T.get('/trends/place', req.query, function(err, data, response) {
    return res.json(data);
  });
});

//http://localhost:8080/search?q=%23TanBionicaCocaColaFM
app.get('/search', function(req, res) {
  T.get('/search/tweets', req.query, function(err, data, response) {
    return res.json(data);
  });
});

//http://localhost:8080/show?id=1011417658833551361
app.get('/show', function(req, res) {
  T.get('statuses/show/' + req.query.id, function(err, data, response) {
    return res.json(data);
  });
});

app.listen(8080);
// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
appFE.listen(port, host, err => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});
