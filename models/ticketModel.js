const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    emailId : String,
    type : String,
    service : String,
    username : String,
    ticket : String,
    attachement : String,
    status : String,
}, {timestamps : true});

module.exports = mongoose.model('Ticket', TicketSchema);
module.exports = TicketSchema;