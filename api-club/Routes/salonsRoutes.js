const express = require('express')
const router = express.Router()
const {getAll, createSalon, insertMany } = require('../controllers/salonsController')
const { upload } = require('../controllers/uploadController');

router
.get('/all', getAll)
.post('/create-salon', upload.array(['imagen']), createSalon)
.get('/create-many', insertMany)
module.exports = router