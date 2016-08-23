var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router({
  "users": []
});
var middlewares = jsonServer.defaults({
  static: __dirname + '/dist'
});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

server.use(middlewares);
server.use("/api", router);

// set the home page route
server.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

server.listen(port, function () {
  console.log('App is running on http://localhost:' + port);
});
