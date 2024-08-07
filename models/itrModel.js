const mongoose = require('mongoose');

const ItrSchema = new mongoose.Schema({
    memberId : String,
    panNumber : String,
    aadharNumber : String,
    dob : String,
    father : String,
    firstName : String,
    lastName : String,
    mobile : String,
    emailId : String,
    password : String,
    type : String,
    address1 : String,
    address2 : String,
    address3 : String,
    pincode : String,
    salaryIncome : String,
    otherIncome : String,
    businessIncome : String,
    annualIncome : String,
    insuranceImage : String,
    pancardImage : String,
    deduct1Image : String,
    deduct2Image : String,    
    charge : String,
    service : String,
    narration : String,
    receipt : String,
    status : String,
}, {timestamps : true});

module.exports = mongoose.model('Itr', ItrSchema);
module.exports = ItrSchema;