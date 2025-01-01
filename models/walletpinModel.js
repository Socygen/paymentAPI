const mongoose = require('mongoose');

const WalletPinSchema = new mongoose.Schema({
    memberId : String,
    password : String,
    status : String,
}, {timestamps : true});

const WalletPin = mongoose.model('WalletPin', WalletPinSchema);
module.exports = WalletPin;

