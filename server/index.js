/* jshint node:true */

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };
//

var hoodie = require('hoodie');
var Hapi = require('hapi');
var url = require('url');
var proxy = require('http-proxy-middleware');

module.exports = function(app) {

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));

  app.use('/hoodie', proxy({target: 'http://localhost:4201'}));

  var server = new Hapi.Server();
  server.connection({
    host: 'localhost',
    port: 4201
  });

  server.register({
    register: hoodie,
    options: {
      // https://github.com/hoodiehq/hoodie/#hapi-plugin
    }
  }, function (error) {
    if (error) {
      var stack = new Error().stack.split('\n').slice(2).join('\n');
      return console.log('app', 'Failed to initialise:\n' + stack, error);
    }

    console.log('app', 'Starting');

    server.start(function () {
      console.log('Your Hoodie server has started on ' + url.format({
        protocol: 'http',
        hostname: 'localhost',
        port: 4201
      }));
    });
  });
};
