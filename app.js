const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();

app.use(helmet());
app.use(compression());

app.use(bodyParser.json()); // parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug'); // engine - pug
app.set('views', __dirname + '/views');

let routes = require('./routes/index'); // include routes
app.use('/', routes);

// catch 404 then forward to error handler
app.use(function(req, res, next)
{
  let err = new Error('404, File Not Found');
  err.status = 404;
  next(err);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
