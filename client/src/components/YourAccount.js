import React,{useState,useEffect} from "react";
import "./YourAccount.css";
import {useHistory} from "react-router-dom";
import axios from "axios";
const YourAccount = () =>
{
    const [accountvalue,setAccountValue] = useState({});
    const history = useHistory();
    useEffect(()=>
    {
        try
        {
            axios.get("http://localhost:3002/account")
            .then((response)=>
            {
                setAccountValue(response.data);
            })
            .catch((err)=>
            {
                history.push("/signin");
            })
        } 
        catch(err)
        {
            history.push("/signin");
        }
    })
    return(<>
    <div className="container">
        <div className="account_head">
            <p>Your Profile</p>
        </div>
        <div className="account_detail">
            <div className="account_title">
                <p>Your Name</p>
            </div>
            <div className="account_title_body">
                <p>{accountvalue.name}</p>
            </div>
        </div>
        <div className="account_detail">
            <div className="account_title">
                <p>Email Detail</p>
            </div>
            <div className="account_title_body">
                <p>{accountvalue.email}</p>
            </div>
        </div>
        <div className="account_detail">
            <div className="account_title">
                <p>Contact Detail</p>
            </div>
            <div className="account_title_body">
                <p>{accountvalue.phone}</p>
            </div>
        </div>
    </div>
    </>);
}

export default YourAccount;