const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
    id : String,
    name : String,
    scan : [Number]
});

module.exports = mongoose.model('Participant',RegistrationSchema);