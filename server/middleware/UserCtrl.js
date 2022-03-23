const {User} = require("../model/UserSchema.js");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const Authentication = async(req,res) =>
{
    const {email,password} = req.body;
    if(!email || !password)
    {
        res.status(422).json({Error:"Please fill all the information"});
    }
    else
    {
        const userExist = await User.findOne({email:email});
        if(userExist)
        {
             const isMatch = await bcrypt.compare(password,userExist.password);
             req.session.isAuth = true,
             sess = req.session;
             sess = userExist;
             if(isMatch)
             {
                 res.status(201).json({Error:"Login Successfull"});
             }
             else
             {
                 res.status(422).json({Error:"Login Unsuccessfull"});
             }
        }
        else
        {
            res.status(422).json({Error:"Login Unsuccessfull"});
        }
    } 
}
const OrderGet = (req,res) =>
{
    const {email} =req.body;
    if(!email)
       res.status(422).json({Error:"Email not get"});
    else
    {
        ordersess = req.session;
        ordersess = email;
        res.status(201).json({Error:"No Error"});
    }
}
const OrderSave = async(req,res) =>
{
    try
    {
        const isUser =  await User.findOne({email:ordersess});
        const  {img,name,category,dis_price,org_price,save_price,date} = productsess;
        if(isUser)
        {
           isUser.userorder = isUser.userorder.concat({img:img,name:name,category:category,dis_price:dis_price,
            org_price:org_price,save_price:save_price,order_date:date})
           await isUser.save();
           res.status(201).json(isUser);
        } 
        else
           res.status(201).json({Error:"User Not Found"});
    }
    catch(err)
    {
       res.status(201).json({Error:"Email is Not Found"});
    }
}
 module.exports = {Authentication,OrderGet,OrderSave};