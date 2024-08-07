const mongoose = require('mongoose');

const IdRequestSchema = new mongoose.Schema({
    memberId : String,
    number : String,    
    payMode : String, 
    amount : String,
    chequeNumber : String,
    chequeDate : String,
    proof : String,
    narration : String, 
    status : String,
}, {timestamps : true});

module.exports = mongoose.model('IdRequest', IdRequestSchema);
module.exports = IdRequestSchema;