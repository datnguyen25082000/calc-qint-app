const express = require('express');
const router = express.Router();
const page404Controller = require('../app/controllers/Page404Controllers');

router.use('/', page404Controller.index);

module.exports = router;
