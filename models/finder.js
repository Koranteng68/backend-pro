const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 // create job creator schema 
 const Finder = new Schema({
     employerName: {type: String},
     email: {type: String},
     phone:{type: Number},
     companyName:{type:String},
     title:{type:String},
    salary:{type: Number},
     venue: {type: String},
     hours:{type: String},
     jobType:{type:String},
     img:{type:String},
     description:{type:String}

//add new locaation
 });

 const Company = mongoose.model('Company',Finder);
 module.exports = Company;