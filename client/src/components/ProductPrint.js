import React from "react";
import "./ProductPrint.css";
import Productdata from "./Productdata.js";
import {NavLink} from "react-router-dom"; 
const ProductPrint = ({name}) =>
{
    return(<div>
    {Productdata.map((val)=>
    {
        if(val.name.toLowerCase().includes(name) ||val.category.toLowerCase().includes(name))
        {
        return(<>
        <div className="product_main_div">
        <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-11">
                            <div className="product" style={{width:"100%",height:"auto"}}>
                            <NavLink to={`/production/${val.name}`} className="navlink">             
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <img src={val.img} alt="Laptop"
                                        style={{width:"200px",height:"200px",
                                        marginTop:"30px",}}></img>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-8" style={{paddingLeft:"100px"}}>
                                        <h5 className="product_name">{val.name}</h5>
                                        <div className="d-flex product_price">
                                            <p>{val.dis_price}</p>
                                            <p><del className="org_price">{val.org_price}</del></p>
                                        </div>
                                        <p className="save_price">Save {val.save_price}</p>
                                    </div>
                                </div>
                                </NavLink>
                                 </div>
                            </div>
                        </div>
                    </div>
            </div>
            </>);   
        }  
        else 
            return null   
    })}
    </div>)
}

export default ProductPrint;