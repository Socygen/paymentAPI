const mongoose = require('mongoose');

const documnetSchema = new mongoose.Schema({
  filename : String,
  originalname : String,
  url : String,
}, { timestamps: true });

const Document = mongoose.model('Document', documnetSchema);
module.exports = Document;
