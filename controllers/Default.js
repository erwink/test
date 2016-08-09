'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.delMovie = function delMovie (req, res, next) {
  Default.delMovie(req.swagger.params, res, next);
};

module.exports.getAll = function getAll (req, res, next) {
  Default.getAll(req.swagger.params, res, next);
};

module.exports.getOne = function getOne (req, res, next) {
  Default.getOne(req.swagger.params, res, next);
};

module.exports.hello = function hello (req, res, next) {
  Default.hello(req.swagger.params, res, next);
};

module.exports.save = function save (req, res, next) {
  Default.save(req.swagger.params, res, next);
};

module.exports.update = function update (req, res, next) {
  Default.update(req.swagger.params, res, next);
};
