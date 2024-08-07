const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
    stateName: String,
},{timestamps : true});

module.exports = mongoose.model('State', StateSchema);
module.exports = StateSchema;