const mongoose = require('mongoose');

const PanTokenSchema = new mongoose.Schema({
    memberId : String,
    response : String,
    quantity : String,
    type : String,
}, {timestamps : true});

const PanToken = mongoose.model('PanToken', PanTokenSchema);
module.exports = PanToken;

