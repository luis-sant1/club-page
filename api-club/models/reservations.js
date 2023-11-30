const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Reservation = new Schema ({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: false
    },
    entryDate: {
        type: Date,
        required: true,
        // select : false
    },
    exitDate: {
        type: Date,
        required: true,
        // select : false
    },
    phone: {
        type: Number,
        required: true
    },
    check:{
        type: Boolean,
        default: false
    },
    salon: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Salons",
        required: true
    }]
},
{
    timestamps : true,
    versionKey : false
})

module.exports =  mongoose.model('Reservations', Reservation);