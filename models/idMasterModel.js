const mongoose = require('mongoose');

const IdMasterSchema = new mongoose.Schema({
    memberId : String,
    allotId : String,
    status : String,
}, {timestamps : true});

const IdMaster = mongoose.model('IdMaster', IdMasterSchema);
module.exports = IdMaster;
