const mongoose=require('mongoose');
 const Schema =mongoose.Schema;


 //schema for logins
 const UserSc=new Schema.mongoose({
     Username: String,
     password: String,
     googleid: String,
     email: String
 });

 const User= mongoose.model('user',UserSc);

 module.exports = User;