const mongoose = require('mongoose');

const MainWalletLedgerSchema = new mongoose.Schema({
    memberId : String,
    credit : String,
    walletBalance : String,
    amount : String,
    narration : String,
}, {timestamps : true});

module.exports = mongoose.model('MainWalletLedger', MainWalletLedgerSchema);
module.exports = MainWalletLedgerSchema;