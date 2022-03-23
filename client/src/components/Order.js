import React,{useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
const Order = (req,res) =>
{
    const [userData,getUserData] = useState({});
    const [cartstatus,setCartStatus] = useState(false);
    useEffect(()=>
    {
        try
        {
             axios.get("http://localhost:3002/userorderdataget")
             .then((response)=>
             {
                 getUserData(response.data);
                 setCartStatus(true);
             })
             .catch((err)=>
             {
                 setCartStatus(false);
             })
        }
        catch(err)
        {
          setCartStatus(false);
        }
    },[]);
    return(<div>
        {cartstatus ? 
     userData.userorder.map((val)=>
     {
         return(<>
             <div className="container-fluid mt-5">
             <div className="row">
                 <div className="col-11">
                     <div className="row">
                         <div className="product_b col-12 col-md-12 col-lg-6 col-xl-6 m-4">
                             <div className="row">
                                 <div className="col-12 col-md-12 col-lg-4">
                                     <img src={val.img} alt="img"
                                     style={{width:"250px",height:"250px"}} className="product_image_b"></img>
                                 </div>
                                 <div className="product_detail_b col-12 col-md-12 col-lg-8">
                                     <h5 className="product_name_b">{val.name}</h5>
                                     <div className="d-flex justify-content-between product_price_b">
                                         <p>{val.dis_price}</p>
                                         <p><del className="org_price_b">{val.org_price}</del></p>
                                     </div>
                                     <p className="save_price_b">Save  {val.save_price}</p>
                                     <p className="order_soon_b">Order Soon</p>
                                     <p className="free_delievery_b">Free Delivery</p>
                                     <p>Date and Time : {val.order_date} </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         </>);        
     }) :(<div className="container">
         <div style={{backgroundColor:"whitesmoke",marginLeft:"30%",
         marginTop:"10%",
        width:"400px",height:"200px",border:"1px groove whitesmoke",
        borderRadius:"5px"}}>
             <i><h1>You are not Login yet <br/> Or <br/> you have not order yet any item</h1></i>
         </div>
     </div>)}
    </div>);
}

export default Order;