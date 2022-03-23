import React, { isidElement } from "react";
import { withRouter } from "react-router-dom";
import "./ProductDetailPrint.css";
import {NavLink,useHistory} from "react-router-dom";
import Productdata from "./Productdata.js";
import axios from "axios";
const ProductDetailPrint = (props) =>
{
    const name = props.match.params.name;
    const history = useHistory();
    const RemoveCartData = (event) =>
    {
        event.preventDefault();
        try
        {
            axios.post("http://localhost:3002/removecartdata",{
                name
            })
            .then(()=>
            {
                alert("Deleted");
                history.push("/addtocart");
            })
            .catch((err)=>
            {
                alert(err);
            })
        }
        catch(err)
        {
            alert(err);
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
                                            <div style={{textAlign:"center"}}>
                                            <NavLink to="/paymentuserdetail">
                                                <button type="button"
                                                style={{backgroundColor:"#8FBC8F",border:"1px groove #8FBC8F",borderRadius:"5px",
                                                marginTop:"20px",fontSize:"20px",fontWeight:"bold"}}
                                                onClick={RemoveCartData}>
                                                Remove</button>
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