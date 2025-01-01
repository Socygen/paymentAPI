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

const Service = mongoose.model('Service', ServiceSchema);
module.exports = Service;

