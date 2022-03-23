import React from "react";
import {NavLink} from "react-router-dom";
const ContactUs = () =>
{
    return(<div className="contactus_main_div">
        <div className="contactus_head">
        <NavLink to="/contactus" className="contactus_head_link">
           <p>ContactUs Page</p>
        </NavLink>
        </div>
        <div className="contactus_div">
            <div className="contactus_detail">
                <p className="contactus_detail_head">Mobile Number</p>
                <p className="contactus_detail_value">7891230981</p>
            </div>
            <div className="contactus_detail">
                <p className="contactus_detail_head">Phone Number</p>
                <p className="contactus_detail_value">789456</p>
            </div>
            <div className="contactus_detail">
                <p className="contactus_detail_head">Email Id</p>
                <p className="contactus_detail_value">poojapanchmani@gmail.com</p>
            </div>
            <div className="contactus_detail">
                <p className="contactus_detail_head">Address</p>
                <p className="contactus_detail_value">110/A Prakash Colony Near Mandi Railway Colony</p>
            </div>
        </div>
    </div>);
}
export default ContactUs;