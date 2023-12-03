const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const sportSchema = new Schema({
    name: {
        type: String
    },
    roofType: {
        type: ['Techado', 'Sin techo'],
        default: []
     },
    floorType: {
        type: String
    },
    mts2: {
        type: String
    },
    price: {
        type: String
    },
    img: {
        type: Object,
        public_id: String,
        secure_url: String
     },
    avaible: {
        type: String
     },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservations'
    }],
})

module.exports = mongoose.model("Sports", sportSchema)