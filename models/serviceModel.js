const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    service : String,
    status : String,
    amount : String,
    type : String,
    operatorCode : String,
    isFlate : String,
    surCharge : String,
    maxAmount : String,
},{timestamps : true});

module.exports = mongoose.model('Service', ServiceSchema);
module.exports = ServiceSchema;