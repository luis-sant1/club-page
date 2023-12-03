const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const restaurantsModel = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imagen:[{
        type: Object,
        public_id: String,
        secure_url: String
     }]
})

module.exports = mongoose.model('Restaurants', restaurantsModel);