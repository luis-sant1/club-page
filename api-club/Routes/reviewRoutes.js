const express = require('express')
const router = express.Router();
const {create, getAll} = require('../controllers/reviewController')

router
.post('/create', create)
.get('/reviews', getAll)

module.exports = router