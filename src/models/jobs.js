const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const schema = new Schema({
    job : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["PENDIENTE", "TERMINADO"],
        default : "PENDIENTE"
    },
    tags : {
        type: String,
        enum : ["NORMAL", "IMPORTANTE", "CRITICO"],
        default : "NORMAL"
    },
    observations: String,
    created : {
        type : Date,
        default : Date.now
    },
});

const jobsModel = model('jobs', schema);
module.exports = jobsModel;
