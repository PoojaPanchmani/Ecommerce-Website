import React from "react";
import "./Navbar1.css";
import Searchbar from "./Searchbar.js";
import SigninRegistration  from "./SigninRegistration";
import addtocart from "./addtocart.png";
import {NavLink} from "react-router-dom";
const Navbar = () =>
{
     return(<>
     <div>
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container-fluid mt-2">
             <NavLink className="navbar-brand navbar_brand_text" 
             to="#">S@SHemKit</NavLink>
                 <ul className="navbar-nav me-auto">
                     <li className="nav-item">
                         <Searchbar/>
                     </li>
                     <li className="navbar-item navbar_item">
                         <SigninRegistration/>
                     </li>
                     <li className="nav-item navbar_item order">
                         <NavLink className="nav-link" to="/order"><span 
                         style={{color:"white"}}>Order</span></NavLink>
                     </li>
                     <li className="nav-item navbar_item cart">
                         <NavLink className="nav-link" to="/addtocart">
                             <img className="cart_img" src={addtocart} 
                             alt="addtocart"/><span 
                             style={{color:"white"}}>cart</span>
                         </NavLink>
                     </li>
                 </ul>
         </div>
    </div>
    </div>
     </>);
}

export default Navbar;