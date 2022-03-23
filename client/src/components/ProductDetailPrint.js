import React, { isValidElement } from "react";
import { withRouter } from "react-router-dom";
import "./ProductDetailPrint.css";
import Productdata from "./Productdata";
import {NavLink,useHistory} from "react-router-dom";
import axios from "axios";
const ProductDetailPrint = (props) =>
{
    const name = props.match.params.name;
    const history = useHistory();
    const AddCart = (val) =>
    {
        const {img,name,category,dis_price,org_price,save_price} = val;
        try
        {
         axios.post("http://localhost:3002/addtocartpost",{
             img,name,category,dis_price,org_price,save_price
         })
         .then(()=>
         {
         })
         .catch((err)=>
         {
         })
        }
        catch(err)
        {

        }
    }
    const OrderSave = (val) =>
    {
        const {img,name,category,dis_price,org_price,save_price} = val;
        const date = new Date().toString();
        try
        {
            axios.post("http://localhost:3002/productsave",{
                img,name,category,dis_price,org_price,save_price,date
            })
            .then(()=>
            {
                
            })
            .catch((err)=>
            {
                alert(err);
            })
        }
        catch(err)
        {

        }
    }
    return(<div>
        {Productdata.map((val)=>
        {
            if((val.name.includes(name)))
            {
                return(<>
                    <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-11">
                            <div className="row">
                                <div className="product_b col-12 col-md-12 col-lg-6 col-xl-6 m-4">
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-4">
                                            <img src={val.img} alt="Laptop"
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
                                            <div className="d-flex justify-content-between">
                                            <NavLink to="/paymentuserdetail">
                                                <button type="button" className="buy_cart_b"
                                                onClick={OrderSave(val)}>
                                                Buy Now</button>
                                            </NavLink>
                                            <NavLink to="/addtocart">
                                            <button type="button" className="buy_cart_b"
                                            onClick={AddCart(val)}>
                                            Addtocart</button>
                                            </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>);
            }
        })}
    </div>)

}

export default withRouter(ProductDetailPrint);