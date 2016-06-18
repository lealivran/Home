import mongoose from "mongoose"
const Schema = mongoose.Schema
const annonceSchema = new Schema({
  title : { type: String, required: true },
  description : { type: String, required: true },
  vente : { type: Boolean, default: true, required: true},
  price : { type: Number, default: 0, required: true},
  pictures : [{
    uri: { type : String, default : '', required: true},
  }],
  furnished : { type: Boolean, default: false, required: true},
  area : { type : Number, default: 0, required: true},
  orientation : {
    type : String,
    enum : ['south', 'north', 'west', 'east'],
    default : ''
  },
  sold: { type: Boolean, default: false},
  type : {
    type: String,
    enum : ['house', 'flat', 'castle', 'loft'],
    default : 'flat',
    required: true
  },
  address: {
    building: { type : String, default : '', required: true },
    street: { type : String, default : '', required: true },
    zipcode: { type : String, default : '', required: true},
    coord: {
      latitude : {type : String, default : '', required: true},
      longitude : {type : String, default : '', required: true}
    },
    city: { type : String, default : '', required: true }
  },
  features : {
    roomNumber : { type : Number, default : 0, required: true },
    bedroomNumber : { type : Number, default : 0, required: true },
    stairs : { type : Number, default : 0, required: true },
    cave : { type: Boolean, default: false, required: true},
    parking : { type: Boolean, default: false, required: true},
    terrace : { type: Boolean, default: false, required: true},
    balcony : { type: Boolean, default: false, required: true},
    garden : { type: Boolean, default: false, required: true},
    pool : { type: Boolean, default: false, required: true}
  },
  date:{type: Date, default: Date.now }
});

let model = mongoose.model('Annonce', annonceSchema);
module.exports = model
