const express = require('express')
const { upload } = require('../controllers/uploadController');
const router = express.Router()
const {
    getAll,
    deleteOne,
    create,
    editOne,
    getOne,
    insertData
} = require('../controllers/eventsController')

router
.get('/getAll', getAll)
.delete('/delete/:_id', deleteOne)
.post('/create', upload.single('img'), create)
.put('/edit/:_id', upload.single('img'), editOne)
.get('/getOne/:_id', getOne)
.get('/insertMany', insertData)
module.exports = router