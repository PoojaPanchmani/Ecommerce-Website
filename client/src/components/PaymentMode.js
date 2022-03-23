import axios from "axios";
import React from "react";
import {useHistory} from "react-router-dom";

const PaymentMode = () =>
{
    const history = useHistory();
    const Offline_Btn = () =>
    {
        try
        {
            axios.get("http://localhost:3002/ordersave")
            .then((response)=>
            {
                history.push("/paymentsuccess");
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
    const Online_Btn = () =>
    {
        history.push("/online_payment");
    }
    return(<div>
        <div className="container">
            <div className="payment_mode_div">
                <h1 className="payment_mode_head">Payment Mode</h1><hr/>
            <div className="d-flex justify-content-between">
                <button className="payment_btn offline_btn"
                onClick={Offline_Btn}>Offline</button>
                <button className="payment_btn online_btn"
                onClick={Online_Btn}>Online</button>
            </div>
            </div>
        </div>
    </div>);
}

export default PaymentMode;