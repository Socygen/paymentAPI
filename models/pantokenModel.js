const mongoose = require('mongoose');

const PanTokenSchema = new mongoose.Schema({
    memberId : String,
    response : String,
    quantity : String,
    type : String,
}, {timestamps : true});

module.exports = mongoose.model('PanToken', PanTokenSchema);
module.exports = PanTokenSchema;