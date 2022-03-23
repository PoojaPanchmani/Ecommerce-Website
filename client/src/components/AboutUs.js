import React from "react";
import {NavLink} from "react-router-dom";

const AboutUs = () =>
{
    return(<div className="aboutus_main_div">
        <div className="aboutus_head">
        <NavLink to="/aboutus" className="aboutus_head_link">
           <p>AboutUs Page</p>
        </NavLink>
        </div>
        <div className="aboutus_detail">
           <i><p>SashemKit is a Ecommerce Website in the Internet. <br/>In this
                Website  40% Off on each item<br/> because in this website the 
                Item is used. 
            </p></i>
        </div>
    </div>);
}

export default AboutUs;