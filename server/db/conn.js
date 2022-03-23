const mongoose = require("mongoose");
mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>
{
    console.log("Successfull Connection Database");
})
.catch((err)=>
{
    console.log(err);
});
