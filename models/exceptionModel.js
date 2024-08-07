const mongoose = require('mongoose');

const exceptionSchema = new mongoose.Schema({
    message : String,
    methodName : String,
    ipAddress : String,
}, {timestamps : true});

const Exception = mongoose.model('Exception', exceptionSchema);
module.exports = Exception;
