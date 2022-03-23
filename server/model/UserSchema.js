const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const mongoose = require("mongoose");
const  UserSchema = mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:Number,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    cpassword:
    {
        type:String,
        required:true
    },
    addtocart:[
        {
           img:String,
           name:String,
           category:String,
           dis_price:String,
           org_price:String,
           save_price:String,
           flag:Boolean,
        }
    ],
    userorder:[
        {
            img:String,
            name:String,
            category:String,
            dis_price:String,
            org_price:String,
            save_price:String,
            order_date:String,
        }
    ]
});
const SearchSchema = mongoose.Schema({
    searchname:
    {
        type:String,
        lowercase:true,
    }
});
UserSchema.pre("save",async function(next)
{
    if(this.isModified("password"))
    {
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});
const Search = mongoose.model("Search",SearchSchema);
const User = mongoose.model("User",UserSchema);

module.exports = {User,Search};