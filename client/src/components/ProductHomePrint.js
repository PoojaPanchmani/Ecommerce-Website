import React from "react";
import "./ProductHomePrint.css";
import {NavLink} from "react-router-dom";
const ProductPrint= (props) =>
{
    return(<>
    <NavLink to={props.category} className="navlink">
    <div className="container">
                <div className="product mt-5" style={{height:"350px"}}>
                    <div>
                                <img src={props.img} alt="Laptop"
                                style={{width:"200px",height:"200px",
                                marginLeft:"30%"}} className="product_image"></img>
                    </div><br/>
                    <div className="product_detail">
                        <p>See Related Items</p>
                        <div className="d-flex product_price">
                            <p>{props.dis_price}</p>
                            <p><del className="org_price">{props.org_price}</del></p>                                
                        </div>
                    </div>
                </div>
    </div>
    </NavLink>
    </>);
}

export default ProductPrint;