const mongoose = require('mongoose');

const aepscomissionSchema = new mongoose.Schema({
    planName : String,
    amountFrom : String,
    amountTo : String,
    comission : String,
    Status : Boolean,
    type : String,
}, { timestamps: true });

const Aepscomission = mongoose.model('Aepscomission', aepscomissionSchema);
module.exports = Aepscomission;
