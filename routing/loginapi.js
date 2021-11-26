const express=require('express');
const router=express.Router();
const passport = require('passport');

router.get('/login',(req,res)=>{
    res.render('login');
});


//auth logout
router.get('/logout',(req,res)=>{
    //handle with passport\
    res.send('logging out');
});




//authenticate with google
router.get('/login-google',passport.authenticate('google',{
    scope:['profile']
}));

//call back route for google to redirect to
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('you reached a callback URI');
});



module.exports=router;