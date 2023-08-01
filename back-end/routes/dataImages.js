const express = require('express');
const router = express.Router();

const controller = require('../controllers/dataImages')
router.get('/', controller.GetAllImages)

module.exports = router