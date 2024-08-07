const mongoose = require('mongoose');

const bankSettingSchema = new mongoose.Schema({
    memberId : String,
    bankName : String,
    ifsc : String,
    account : String,
    type : String,
    status : String,
    isPrimary : String,
}, { timestamps: true });

const BankSetting = mongoose.model('BankSetting', bankSettingSchema);
module.exports = BankSetting;
