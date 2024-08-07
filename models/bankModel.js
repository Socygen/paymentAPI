const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    bankName : String,
}, { timestamps: true });

const Bank = mongoose.model('Bank', bankSchema);
module.exports = Bank;
