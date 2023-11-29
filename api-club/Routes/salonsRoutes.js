const express = require('express')
const router = express.Router()
const {getAll, createSalon, insertMany, getOne } = require('../controllers/salonsController')
const { upload } = require('../controllers/uploadController');

router
.get('/all', getAll)
.post('/create-salon', upload.array(['imagen']), createSalon)
.get('/create-many', insertMany)
.get('/salon/:_id', getOne)
module.exports = router