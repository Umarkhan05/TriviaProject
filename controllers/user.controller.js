const express = require('express');

const User = require('../models/user.model');


//User Signup function
exports.user_signup = async function(req, res){
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        dateofbirth: req.body.dateofbirth
    });
    try{
        const newUser = await user.save();
        res.redirect('/login');
    }
    catch{
        res.send('Error creating User');
    }

    

}


//User Login function

exports.user_login = async function(req, res){
    const user = User.find(user => user.name = req.body.name)
    if(user == null){
        return res.status(400).send('Cannot find user!!')
     }
     try{
       if(await req.body.password == user.password){
         res.send('login sucessfull!')
         console.log('Login sucessfull')
       }else
       {
           res.send('Not Allowed')
       }
     }
     catch{
         res.status(500).send()
     }

}