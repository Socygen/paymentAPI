const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
    stateName: String,
}, { timestamps: true });

const State = mongoose.model('State', StateSchema);
module.exports = State;
