const mongoose = require('mongoose');

const PayoutSurchargeSchema = new mongoose.Schema({
    startRange : String,
    endRange : String,
    surchargeAmount : String,
    Flat : String,
}, {timestamps : true});

const PayoutSurcharge = mongoose.model('PanToken', PayoutSurchargeSchema);
module.exports = PayoutSurcharge;

