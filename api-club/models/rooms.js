const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const roomModel = Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    imagen: {
        type: Object,
        public_id: String,
        secure_url: String,
        default: null
    },
    review: 
        [{type: mongoose.Schema.Types.ObjectId,
        ref: "Reviews"}]
    ,
    promo:{
        type: String,
    },
    modcon: {
        type:String
    },
    modcon1: {
        type:String
    },
    modcon2: {
        type:String
    },
    modcon3: {
        type:String
    },
},
    {
        timestamps: true,
        versionKey: false
    })

    module.exports = mongoose.model('Rooms', roomModel);