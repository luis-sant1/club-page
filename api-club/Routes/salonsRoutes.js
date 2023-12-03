const express = require('express')
const router = express.Router()
const {getAll, createSalon, insertMany, getOne, deleteOne, editOne } = require('../controllers/salonsController')
const { upload } = require('../controllers/uploadController');

router
.get('/all', getAll)
.post('/create-salon', upload.array(['imagen']), createSalon)
.get('/create-many', insertMany)
.get('/salon/:_id', getOne)
.delete('/delete/:_id', deleteOne)
.put('/edit/:_id', upload.array(['imagen']), editOne)
module.exports = router