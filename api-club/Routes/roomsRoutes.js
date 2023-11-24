const express = require('express')
const router = express.Router();
const {getAll, createRooms, roomAndReviews, editRoom, oneRoom, deleteRoom} = require('../controllers/roomsController')
const { upload } = require('../controllers/uploadController');

router
// .get('/getRooms', getAll )
.post('/create', upload.single("imagen"), createRooms )
.get('/getRooms', roomAndReviews)
.put('/editRooms/:_id', upload.single("imagen"), editRoom)
.get('/getRoom/:_id',  oneRoom)
.delete('/deleteRoom/:_id',  deleteRoom)

module.exports = router; 