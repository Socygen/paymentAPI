const mongoose = require('mongoose');

const NewsEventSchema = new mongoose.Schema({
    newsEvent : String,
    type : String,
    status : String,
}, {timestamps : true});

const NewsEvent = mongoose.model('NewsEvent', NewsEventSchema);
module.exports = NewsEvent;
