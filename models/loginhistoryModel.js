const mongoose = require('mongoose');

const LoginHistorySchema = new mongoose.Schema({
    memberId : String,
    fullName : String,
    ipAddress : String,
    device : String,
    browser : String,
}, {timestamps : true});

const LoginHistory = mongoose.model('LoginHistory', LoginHistorySchema);
module.exports = LoginHistory;
