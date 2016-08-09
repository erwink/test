'use strict';

exports.delMovie = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "success" : 1.3579000000000001069366817318950779736042022705078125,
  "description" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAll = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "movies" : [ {
    "year" : 1.3579000000000001069366817318950779736042022705078125,
    "id" : "aeiou",
    "title" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getOne = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "year" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "aeiou",
  "title" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.hello = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "message" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.save = function(args, res, next) {
  /**
   * parameters expected in the args:
  * title (Movie)
  **/
    var examples = {};
  examples['application/json'] = {
  "success" : 1.3579000000000001069366817318950779736042022705078125,
  "description" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.update = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * title (Movie)
  **/
    var examples = {};
  examples['application/json'] = {
  "success" : 1.3579000000000001069366817318950779736042022705078125,
  "description" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

