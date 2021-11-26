const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const JobS = new Schema({
    name:{
        type:String,
        required:[true,'name required']
    },
    DOB:{
        type:String,
        required:[true]

    },
    location:{
        String
    },
    email:{
        String
    },
    number:{
        String
    }
});

const Seekers = mongoose.model('JobSeekers',JobS);
module.exports = Seekers;
