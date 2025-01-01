const mongoose = require('mongoose');

const contactusSchema = new mongoose.Schema({
    fullName : String,
    EmailId : String,
    mobile : String,
    company : String,
    message : String, 
}, { timestamps: true });

const ContactUs = mongoose.model('ContactUs', contactusSchema);
module.exports = ContactUs;
