const mongoose = require('mongoose');

const ItrLedgerSchema = new mongoose.Schema({
    memberId: {
        type: String,
        required: true
    },
    credit: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    narration: {
        type: String,
        required: true
    },
    number: String,
    payMode: String,
    chequeNumber: String,
    chequeDate: String,
    proof: String,
    status: String
}, { timestamps: true });

const ItrLedger = mongoose.model('ItrLedger', ItrLedgerSchema);

module.exports = { ItrLedger, ItrLedgerSchema };

