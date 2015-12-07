'use strict';

var express = require('express');
var controller = require('./lunar.controller');

var router = express.Router();

// router.get('/', controller.index);
router.get('/:birth', controller.show);
router.get('/word/:word', controller.word);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
