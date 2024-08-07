const mongoose = require('mongoose');

const gstledgerSchema = new mongoose.Schema({
    memberId : String,
    credit : String,
    amount : String,
    narration : String,
}, {timestamps : true});

const Gstledger = mongoose.model('Gstledger', gstledgerSchema);
module.exports = Gstledger;
