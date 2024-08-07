const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    image : String,
    quotation : String,
    type :  String,
    status : String, 
}, {timestamps : true});

const Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;
