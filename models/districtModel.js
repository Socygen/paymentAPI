const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
    StateId : String,
    district : String,
}, {timestamps : true});

const District = mongoose.model('District', districtSchema);
module.exports = District;
