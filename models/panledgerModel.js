const mongoose = require('mongoose');

const PanLedgerSchema = new mongoose.Schema({
    memberId : String,
    credit : String,
    amount : String,
    narration : String,
}, {timestamps : true});

module.exports = mongoose.model('PanLedger', PanLedgerSchema);
module.exports = PanLedgerSchema;