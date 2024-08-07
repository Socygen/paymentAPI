const mongoose = require('mongoose');

const NewsEventSchema = new mongoose.Schema({
    newsEvent : String,
    type : String,
    status : String,
}, {timestamps : true});

module.exports = mongoose.model('NewsEvent', NewsEventSchema);
module.exports = NewsEventSchema;