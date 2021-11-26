const server=require('express');
const BodyParser=require('body-parser');
const mongoose=require('mongoose');
//const authRoutes = require('./routing/loginapi');
//const passportSetup = require('./new-config/passport-config');
const api =require('./routing/api');
//const LocalStrategy=require('passport-local');
//const PassportLocalM=require('passport-local-mongoose');

//const { initialize } = require('passport');
require("dotenv").config();





const app=server();

//connect to mongo db


const db = async ()=>{
  
  try{
    const success = await mongoose.createConnection(process.env.DATABASE_CLOUD_Uri,{
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology:true,
      // useFindAndModify: false
    })
    console.log("DB connected successfully")

  }catch(err){
    console.log("DB err message: ", err)

  }
}


db();



app.use(BodyParser.json());
//app.use(BodyParser.urlencoded({extended:true}));
//app.use(require('express-session')({

  //app.use((err,req,res,next)=>{
//res.send({error:err.message});
  //});



//app.get('/',(req,res)=>{
  //  console.log('GET request');
    //res.send({name:"HANNAH"});
//})
//initialise routing

//app.use('/api',require('./routing/api'));
//app.use('/auth',authRoutes);
app.use('/api',api);

//listen for request
app.listen(process.env.port||4000,function(){
    console.log('now listening request');
})