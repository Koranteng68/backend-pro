const express=require('express');
const router=express.Router();
const Company = require('../models/finder');

router.get('/finder/:id',(req,res)=>{
Company.find({}).then((posting)=>{
res.send(posting);
});

});

//add new user to db
router.post('/finder',async(req,res)=>{
const post = req.body
Company.create(post)
res.status(200).send(post);
});

//uddate user
router.put('/finder/:id',(req,res)=>{
    res.send({type:'PUT'});
});


//delete user
router.delete('/finder/:id',(req,res)=>{
    Company.findByIdAndRemove({_id: req.params.id}).then((deletion)=>{
res.send(deletion);
    })
    res.send({type:'DELETE'});
})

module.exports=router; 