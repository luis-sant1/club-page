const express = require('express')
const router = express.Router();
const { upload } = require('../controllers/uploadController');
const {
    getAll,
    getOne,
    deleteOne,
    create,
    editONe,
    insertMany
} = require('../controllers/restaurantsControllers')

router 

.get('/getAll', getAll )
.get('/getOne/:_id',  getOne)
.get('/insertMany',  insertMany)
.put('/edit/:_id',  upload.array(['imagen']), editONe )
.post('/create',  upload.array(['imagen']), create)
.delete('/delete/:_id',  deleteOne)

module.exports = router