const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv  = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
const session = require("express-session");
const cors = require("cors");
const {User,Search} = require("./model/UserSchema.js");
const app = express();
app.use(express.json());
dotenv.config({path:"./config.env"});
const UserCtrl= require("./middleware/UserCtrl.js");
require("./db/conn.js");
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    key:"user_sid",
    secret:"Key that will sign cookie",
    resave:false,
    saveUninitialized:false,
    cookie:
    {
        expires:60000,
    }
}))
app.get("/",(req,res)=>
{
    res.send("Hello Home Page");
});
app.get("/product",(req,res)=>
{
     res.send("Product");
})
app.post("/register",async(req,res)=>
{
    const{name,email,phone,password,cpassword} = req.body;
    if(!name || !email || !phone || !password || !cpassword)
    {
        res.status(422).json({Error:"Please Fill all the information"});
    }
    else
    {
         const userExist = await User.findOne({email:email});
         if(userExist)
         {
             res.status(422).json({Error:"User already Exist"});
         }
         else if(password!=cpassword)
         {
             res.status(422).json({Error:"Password and Confirm Password are not matching"});
         }
         else
         {
             const user = req.body;
             const newUser = new User(user);
             await newUser.save();
             res.json(user);
         }
    }
})
app.post("/signin",UserCtrl.Authentication);
app.post("/orderdataget",UserCtrl.OrderGet);
app.get("/ordersave",UserCtrl.OrderSave);
app.post("/product",async(req,res)=>
{
        let {searchname} = req.body;
        if(searchname.length!==0)
        {
        const newSearch = new Search({
            searchname
        });
        await newSearch.save();
        res.json(newSearch);
        }

});
app.post("/addtocartpost",async(req,res)=>
{
    const {img,name,category,dis_price,org_price,save_price} = req.body;
    const flag=false;
    try
    {
        sess.addtocart = sess.addtocart.concat({img:img,name:name,category:category,dis_price:dis_price,org_price:org_price,save_price:save_price,flag:flag});
        await sess.save();
        res.status(201).json({Error:"USer Login"});
    }
    catch(err)
    {
       res.status(422).json({Error:"User Not Login"});
    }
})
app.post("/productsave",async(req,res)=>
{
    const {img,name,category,dis_price,org_price,save_price,date} = req.body;
    try
    {
         productsess = req.sesssion;
         productsess = {img,name,category,dis_price,org_price,save_price,date};
    }
    catch(err)
    {

    }
})
app.post("/payment",async(req,res)=>
{
    console.log(req.body);
    res.status(201).json({Eorror:"Hello"});
})
app.post("/removecartdata",async(req,res)=>
{
    const name=req.body.name;
    try
    {
        User.findOneAndUpdate({_id:sess._id},{
            $pull:{addtocart:{name:name}}
        })
        res.status(201).json({Erorr:""});
    }
    catch(err)
    {
        console.log(err);
        res.status(422).json({Erorr:""});

    }
    finally
    {
        mongoose.connection.close();
    }
})
app.get("/addtocartget",async(req,res)=>
{
     try
     {
           if(sess.addtocart.length === 0)
             res.status(422).send({Error:"Hello"});
           else
             res.status(201).json(sess);
     }
     catch(err)
     {
         res.status(422).send({Error:"bii"});
     }
})
app.get("/userorderdataget",async(req,res)=>
{
    try
    {
        if(sess.userorder.length === 0)
          res.status(422).send({Error:"Hello"});
        else 
          res.status(201).json(sess);
    }
    catch(err)
    { 
      res.status(422).send({Error:"bii"});
    }
})
app.get("/getsearchdata",async(req,res)=>
{
     const user = await Search.find({});
         if(!user)
         {
             res.status(422).json({Error:"Not Found Data"});
         }
         else
         {
             const lastuser = (await Search.find().sort({_id:-1}).limit(1));
             res.json(lastuser);
         }
});
app.get("/account",(req,res)=>
{
    try 
    {
       res.status(201).json(sess); 
    } 
    catch (error) 
    {
        res.status(422).json({Error:"Your are not login yet"});
    }
})
app.listen(3002,()=>
{
    console.log("Successfull Connection");
});