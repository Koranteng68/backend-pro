const passport = require('passport');
const GoogleStr = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/login');



passport.serializeUser((user,done)=>{
    done(null,user.id);
})


passport.deserializeUser((id,done)=>{
    User.findByid(id).then((user)=>{
        done(null,user);
    })
   
})


passport.use(new GoogleStr({
//options for google strategy
callbackURL:'/auth/google/redirect',
clientID:keys.google.clientID,
clientSecret:keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{

    //passport call back function
console.log('passport call function fired');
console.log(profile);

//check if user already exist
User.findOne({googleid:profile.id}.then((currentUser)=>{
    if(currentUser){
        //already have the user
console.log('user is:',currentUser)
done(null,currentUser);
    } else{
        new User({
            Username:profile.displayName,
            googleid: profile.id
        }).save().then((newUser)=>{
            console.log('new user created:'+ newUser);
            done(null,newUser);
        })
    }
}));

})

);