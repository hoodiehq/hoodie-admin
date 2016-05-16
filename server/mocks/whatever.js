/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var whateverRouter = express.Router();

  whateverRouter.get('/', function(req, res) {
    res.send({
      'whatever': []
    });
  });

  whateverRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  whateverRouter.get('/:id', function(req, res) {
    res.send({
      'whatever': {
        id: req.params.id
      }
    });
  });

  whateverRouter.put('/:id', function(req, res) {
    res.send({
      'whatever': {
        id: req.params.id
      }
    });
  });

  whateverRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/whatever', require('body-parser').json());
  app.use('/api/whatever', whateverRouter);
};
