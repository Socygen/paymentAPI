const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId : String,
    name : String,
    mobile : String,
    emailId : String,
    address : String,
    pincode : String,
    product : String,
    quantity : String,
    price : String,
    narration : String,
    tracking : String,
    status : String,
},{timestamps : true});

module.exports = mongoose.model('Order', OrderSchema);
module.exports = OrderSchema;