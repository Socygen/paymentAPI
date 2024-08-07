const mongoose = require('mongoose');

const PayoutSurchargeSchema = new mongoose.Schema({
    startRange : String,
    endRange : String,
    surchargeAmount : String,
    Flat : String,
}, {timestamps : true});

module.exports = mongoose.model('PayoutSurcharge', PayoutSurchargeSchema);
module.exports = PayoutSurchargeSchema;