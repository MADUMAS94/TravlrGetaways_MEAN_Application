const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/travel');

router
    .route('/trips')
    .get(tripsController.tripList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);

module.exports = router;