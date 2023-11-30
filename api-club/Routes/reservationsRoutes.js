const express = require('express');
const router = express.Router();
const {createReservation, getAll} = require('../controllers/reservations')
const {validateReservation} = require('../validators/reservations')

router
.post('/create/:_id',  validateReservation, createReservation)
.get('/all',   getAll);

module.exports = router;