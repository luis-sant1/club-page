const express = require('express')
const { upload } = require('../controllers/uploadController');
const router = express.Router()
const { getALl , create, edit, deleteOne, insertMany} = require('../controllers/sportsController')

router
.get('/allSports',  getALl)
.get('/createMany',  insertMany)
.post('/createSports', upload.single('img'), create )
.put('/editSport/:_id', upload.single('img'), edit)
.delete('/delete/:_id', deleteOne)

module.exports = router