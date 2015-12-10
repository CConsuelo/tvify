var http  = require('http');

var assets = require('./assets.js');

var server = http.createServer(function(request, response) {
  var responseObj;
  switch (request.url) {
    case '/':
      assets.serveStatic('index.html', function(err, content) {
        if (err) {
          console.log('Error: ' + err)
        }
        response.end(content);
      });
    break
    case '/app.js':
      assets.serveStatic('app.js', function(err, content) {
        if (err) {
          console.log('Error: ' + err)
        }
        response.end(content);
      });
    break
    case '/app.css':
      assets.serveStatic('app.css', function(err, content) {
        if (err) {
          console.log('Error: ' + err)
        }
        response.end(content);
      });
    break
    default:
      response.statusCode = 404;
      response.end('Error 404');
    break
  }
});

server.listen(3000, function() {
  console.log('Servidor iniciado en el puerto 3000');
});