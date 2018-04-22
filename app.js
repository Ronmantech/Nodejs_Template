const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response)
{
  response.send('Hello World!');
})

app.listen(app.get('port'), function()
{
  console.log("Node app is running at localhost:" + app.get('port'));
})
