const controller = require('../controllers/users');

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  controller.listUsers(req, res, next);
});

module.exports = router;
