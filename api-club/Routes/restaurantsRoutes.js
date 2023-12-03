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
.get('/getOne',  getOne)
.get('/insertMany',  insertMany)
.put('/edit/:_id', upload.single('imagen'), editONe )
.post('/create', upload.single('imagen'), create)
.delete('/delete/:_id',  deleteOne)

module.exports = router