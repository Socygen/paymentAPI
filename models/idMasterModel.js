const mongoose = require('mongoose');

const IdMasterSchema = new mongoose.Schema({
    memberId : String,
    allotId : String,
    status : String,
}, {timestamps : true});

module.exports = mongoose.model('IdMaster', IdMasterSchema);
module.exports = IdMasterSchema;