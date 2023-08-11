const express = require('express');
const router = express.Router();

const singlepageImages = require('../controllers/realisations');

router.get('/', singlepageImages.getAllImages);
router.get('/:id', singlepageImages.getOneImage);


module.exports = router;