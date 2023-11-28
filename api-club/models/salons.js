const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const salonModel = new Schema({
   nombre: {
      type: String
   },
   descripcion: {
      type: String,
   },
   imagen:[{
      type: Object,
      public_id: String,
      secure_url: String
   }],
   mts2: {
      type: String,
   },
   site: {
      type: Array,
      default: []
   },
   max: {
      type: String
   },
   feature: {
      type: String
   },
   reservations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reservations'}]
}); 


module.exports = mongoose.model('Salons', salonModel);