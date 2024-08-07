const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName : String,
    productPrice : String,
    image : String,
    gst : String,
    description : String,
    status : String,
}, {timestamps : true});

module.exports = mongoose.model('Product', ProductSchema);
module.exports = ProductSchema;