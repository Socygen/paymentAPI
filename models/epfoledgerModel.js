const mongoose = require('mongoose');

const epfoledgerSchema = new mongoose.Schema({
    memberId : String,
    credit : String,
    amount : String,
    narration: String,
}, {timestamps : true});

const Epfoledger = mongoose.model('Epfoledger', epfoledgerSchema);
module.exports = Epfoledger;
