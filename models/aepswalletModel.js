const mongoose = require('mongoose');

const aepswalletSchema = new mongoose.Schema({
    memberId : String,
    credit : String,
    walletBalance : String,
    amount : String,
    narration : String,
    Date : Date,
}, { timestamps: true });

const Aepswallet = mongoose.model('Aepswallet', aepswalletSchema);
module.exports = Aepswallet;
