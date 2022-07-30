const express = require('express')
const router = express.Router();
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require("../model/userSchema")
router.get('/', (req,res)=>{
    res.send('Hello world router.js');
});



router.post('/register', async (req,res)=>{

    const { email, bid, password, cpassword, aggre } = req.body;
    if(!email || !bid || !password || !cpassword){
        return res.status(422).json({error: "Missing Field", registered: false});
    }

    try{
        const userExist = await User.findOne({email: email});
        if(userExist) {
            return res.status(422).json({error: "Email already exists!", registered: false});
        }else if(password!= cpassword){
            return res.status(422).json({error: "Passwords are not matching!", registered: false});
        }
        else{
            const user = new User({email, bid, password, cpassword, aggre});
        //hasing here
        await user.save();

        res.status(201).json({message: "User register successfully!"});
        }
    }catch(err){
        console.log(err);
    }
})

//login
router.post('/signin',async (req,res)=>{
    try{
        let token;
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Empty Fields"})
        }

        const userLogin = await User.findOne({email: email});
        //console.log(userLogin); 
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if(!isMatch){
                    res.status(400).json({error:"Invalid Credentials"});
            } else{
                res.json({message: "user signed in successfully", bid: userLogin.bid});
            }
        }else{
            res.status(400).json({error:"Invalid Credentials"});
        }        
    }catch(err){
        console.log(err);
    }
})


module.exports = router;