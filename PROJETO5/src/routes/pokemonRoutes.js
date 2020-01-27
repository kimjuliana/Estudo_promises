const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokemonController');


router.get('/:name', controller.getByName);
router.get('/:name', controller.getBySpecie);
router.get('/:name', controller.getByColor);

module.exports = router;