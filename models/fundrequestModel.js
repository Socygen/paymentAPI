const mongoose = require('mongoose');

const fundRequestSchema = new mongoose.Schema({
    userId : String,
    banknameFrom : String,
    banknameTo : String,
    paymentMode : String,
    paymentProof : String,
    chequeNumber : String,
    chequeDate : String,
    fundAmount : String,
    remark : String,
    status : String,
}, {timestamps : true});

const FundRequest = mongoose.model('FundRequest', fundRequestSchema);
module.exports = FundRequest;
