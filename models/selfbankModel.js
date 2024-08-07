const mongoose = require('mongoose');

const SelfBankSchema = new mongoose.Schema({
    bankName : String,
    branchName : String,
    accountType : String,
    accountHoldername : String,
    accountNumber : String,
    ifsc : String,
},{timestamps : true});

module.exports = mongoose.model('SelfBank', SelfBankSchema);
module.exports = SelfBankSchema;