const express = require('express');
const router = express.Router();
const {createReservation} = require('../controllers/reservations')
const {validateReservation} = require('../validators/reservations')

router
.post('/create',   createReservation);

module.exports = router;