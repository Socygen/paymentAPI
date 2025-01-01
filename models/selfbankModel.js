const mongoose = require('mongoose');

const SelfBankSchema = new mongoose.Schema({
    bankName : String,
    branchName : String,
    accountType : String,
    accountHoldername : String,
    accountNumber : String,
    ifsc : String,
},{timestamps : true});

const SelfBank = mongoose.model('SelfBank', SelfBankSchema);
module.exports = SelfBank;
