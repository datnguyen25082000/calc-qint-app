const express = require('express');
const router = express.Router();
const commentsControllers = require('../app/controllers/CommentsControllers');

router.use('/', commentsControllers.index);

module.exports = router;