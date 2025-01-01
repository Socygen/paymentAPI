const mongoose = require('mongoose');

const MessageSettingSchema = new mongoose.Schema({
    senderId : String,
    registration : String,
    message : String,
}, {timestamps : true});

const MessageSetting = mongoose.model('MessageSetting', MessageSettingSchema);
module.exports = MessageSetting;
