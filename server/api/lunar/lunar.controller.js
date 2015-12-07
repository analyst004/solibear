/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/lunar/:timstamp          ->  show
 */

'use strict';

var _ = require('lodash');
var cl = require('chinese-lunar');
var moment = require('moment');
var birthdates = require("./birthdates");
var request = require('request');


function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

exports.show = function(req, res) {
  var birth = moment(req.params.birth, "YYYYMMDDHH");
  // console.log(birth.year()+"年"+(birth.month()+1)+"月"+birth.date()+"日"+birth.hour()+"时");
  try {
    var gz = birthdates.getBirthdate(birth.year(), birth.month()+1, birth.date(), birth.hour());
    res.status(200).json(gz);
    responseWithResult(res);
  } catch (err) {
    console.log(err);
    handleError(res);
  }

  // Thing.findByIdAsync(req.params.timestamp)
  //   .then(handleEntityNotFound(res))
  //   .then(responseWithResult(res))
  //   .catch(handleError(res));
}

exports.word = function(req, res) {
  var word = req.params.word;
  try {
    request("http://brisk.eu.org/api/xhzd.php?word=隆", function(error, response, body) {
      console.log(error);
      console.log(response);
      console.log(body);
      res.status(200).json(body);
      responseWithResult(res);
    });
  } catch (err) {
    console.log(err);
    handleError(res);
  }
}
