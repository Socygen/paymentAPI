const mongoose = require('mongoose');

const WalletPinSchema = new mongoose.Schema({
    memberId : String,
    password : String,
    status : String,
}, {timestamps : true});

module.exports = mongoose.model('WalletPin', WalletPinSchema);
module.exports = WalletPinSchema;