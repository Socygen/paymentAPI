const mongoose = require('mongoose');

const LoginHistorySchema = new mongoose.Schema({
    memberId : String,
    fullName : String,
    ipAddress : String,
    device : String,
    browser : String,
}, {timestamps : true});

module.exports = mongoose.model('LoginHistory', LoginHistorySchema);
module.exports = LoginHistorySchema;