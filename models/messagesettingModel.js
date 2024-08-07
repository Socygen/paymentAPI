const mongoose = require('mongoose');

const MessageSettingSchema = new mongoose.Schema({
    senderId : String,
    registration : String,
    message : String,
}, {timestamps : true});

module.exports = mongoose.model('MessageSetting', MessageSettingSchema);
module.exports = MessageSettingSchema;