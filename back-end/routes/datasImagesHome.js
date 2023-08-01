const express = require('express');
const router = express.Router();

const controller = require('../controllers/datasImagesHome')
router.get('/', controller.GetAllImagesHome)

module.exports = router