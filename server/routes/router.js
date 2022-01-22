const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const rug = require('random-username-generator');
const authenticate = require('../middleware/authenticate');


const router = express.Router();

require("../Database/connect");
const User = require("../model/userSchema");

//function to generate random numbers

const random = (max,min)=>{
    return Math.floor(Math.random()*(max-min)+min);
}



//route for Registration

router.post('/signup', async (req, res) => {
    const {phone,password,recommendation}=req.body;

    if(!phone || !password){
            return res.status(422).json({error:"Please fill the fields properly"});
    }


    try{
        const userExist = await User.findOne({phone:phone});
        if(userExist){
            return res.status(422).json({error:"User Already exists"});
        }
        else{
            let username = rug.generate();
            let Id = random(1000000,100000);
            const user = new User({username,Id,phone,password,recommendation});
            const register = await user.save();
            if(register){
                res.status(201).json({success:"User Registerd Successfully"});
            }
            else{
                res.status(500).json({error:"User Failed to Register"});
            }
        }

    }catch(err){console.log(err)};


});

//Route for Login

router.post('/login',async (req,res) => {
    // console.log(req.body);
    // res.json({meassage:"goood"});

    try{
        const {phone , password} = req.body;
        if(!phone || !password){
            return res.status(400).json({error:"Please fill the data"});
        }

        const validateUser = await User.findOne({phone:phone});
        
        if(!validateUser){
            res.status(400).json({error:"User not found"});
        }
        else{
            const isValidlogin = await bcrypt.compare(password , validateUser.password);
            const token = await validateUser.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token,{
                expires:new Date(Date.now() + 60480000),
                httpOnly:true
            });

            if(!isValidlogin){
                res.status(400).json({error:"User not found"});
            }
            else{
                res.json({success:"user found!"});
            }
        }

    }catch(err){
        console.log(err);
    };
});

//Route for mine
router.get('/mine',authenticate,(req,res) => {
    res.send(req.verifiedUser);
});


module.exports = router;