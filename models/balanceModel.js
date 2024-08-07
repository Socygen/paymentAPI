const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
    memberId : String,
    credit : String,
    walletBalance : Number,
    amount : Number,
    narration : String,
    addedBy : String,
}, { timestamps: true });

const Balance = mongoose.model('Balance', balanceSchema);
module.exports = Balance;
