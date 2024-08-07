const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId : String,
    type : String,
    firstName : String,
    lastName : String,
    emailId : String,
    password : String,
    mobile : String,
    permission : String,
    status : Number,
    createdBy : String,
    updatedBy : String,
}, {timestamps : true});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
