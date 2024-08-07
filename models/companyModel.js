const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    compnayName : String,
    logo : String,
    owner : String,
    phone : String,
    mobile : String,
    emailId : String,
    website : String,
    fax : String,
    addressLine1 : String,
    addressLine2 : String,
    copyright : String,
    address : String,
    pincode : String,
    country : String,
    state : String,
    city : String,
}, { timestamps: true });

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
