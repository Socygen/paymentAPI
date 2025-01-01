const mongoose = require('mongoose');

const ItrLedgerSchema = new mongoose.Schema({
    memberId: {type: String},
    credit: {type: String},
    amount: {type: String},
    narration: {type: String},
    number: String,
    payMode: String,
    chequeNumber: String,
    chequeDate: String,
    proof: String,
    status: String
}, { timestamps: true });

const ItrLedger = mongoose.model('ItrLedger', ItrLedgerSchema);
module.exports = ItrLedger;

