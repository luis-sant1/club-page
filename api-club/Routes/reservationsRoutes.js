const express = require('express');
const router = express.Router();
const {createReservation} = require('../controllers/reservations')
const {validateReservation} = require('../validators/reservations')

router
.post('/create', validateReservation,  createReservation);

module.exports = router;