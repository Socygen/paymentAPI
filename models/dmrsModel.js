const mongoose = require('mongoose');

const dmrsSchema = new mongoose.Schema({
    type : String,
    startRange : String,
    endRange : String,
    surchargeAmount : String,
    commission : String,
    flat : String,
}, {timestamps : true});

const Dmrs = mongoose.model('Dmrs', dmrsSchema);
module.exports = Dmrs;
