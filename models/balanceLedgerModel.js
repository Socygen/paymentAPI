const mongoose = require('mongoose');

const balanceledgerSchema = new mongoose.Schema({
    memberId : String,
    userCode : String,
    aadhar : String,
    tid : String,
    bankRefrence : String,
    clientRefrence : String,
    customerId : String,
    service : String,
    credit : String,
    debit : String,
    walletBalance : String,
    amount : String,
    narration : String,
    addedBy : String,
}, { timestamps: true });

const Balanceledger = mongoose.model('Balanceledger', balanceledgerSchema);
module.exports = Balanceledger;
