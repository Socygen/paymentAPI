const mongoose = require('mongoose');

const epfoSchema = new mongoose.Schema({
    memberId : String,
    name : String,
    father : String,
    dob : String,
    aadhar : String,
    pan : String,
    account : String,
    mobile : String,
    emailId : String,
    aadharImage : String,
    panImage : String,
    passbookImage : String,
    payslipImage : String,
    companyImage : String,
    service : String,
    charge : String,
    narration : String,
    receipt : String,
    status : String,
}, {timestamps : true});

const Epfo = mongoose.model('Epfo', epfoSchema);
module.exports = Epfo;
