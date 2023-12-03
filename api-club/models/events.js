const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const eventsModel = new Schema({
    name: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    img: {
        type: Object,
        public_id: String,
        secure_url: String
    },
    description: {
        type: String,
        required: true
    },
    entryDate: {
        type: Date,
        required: true
    },
    exitDate: {
        type: Date,
        required: true
    },
    entryHour: {
        type: String,
        required: true
    },
    exitHour: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Events', eventsModel);