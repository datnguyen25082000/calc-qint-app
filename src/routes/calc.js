const express = require('express');
const router = express.Router();
const calcControllers = require('../app/controllers/CalcControllers');

router.use('/', calcControllers.index);

module.exports = router;