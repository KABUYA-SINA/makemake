const express = require('express');
const router = express.Router();

const controller = require('../controllers/datasImagesRealisations')
router.get('/', controller.GetAllImagesRealisation)

module.exports = router