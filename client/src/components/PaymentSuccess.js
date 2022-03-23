import React from "react";
import "./PaymentBlock.css";
import {NavLink} from "react-router-dom";
const PaymentSuccess = () =>
{
    return(<>
        <div className="container">
            <div className="payment_success_div">
                <pre className="payment_success_info">
                    Thank You for Order an item<br/>
                    Your Order is delieverd Timely 
                </pre>
                <NavLink to="/">
                    <button className="payment_success_btn">Go To Home Page</button>
                </NavLink>
            </div>
        </div>
    </>)
}

export default PaymentSuccess;