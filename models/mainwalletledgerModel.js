const mongoose = require('mongoose');

const MainWalletLedgerSchema = new mongoose.Schema({
    memberId : String,
    credit : String,
    walletBalance : String,
    amount : String,
    narration : String,
}, {timestamps : true});

const MainWalletLedger = mongoose.model('MainWalletLedger', MainWalletLedgerSchema);
module.exports = MainWalletLedger;
