import React,{useState} from "react";
import "./PaymentBlock.css";
import {useHistory} from "react-router-dom";
import axios from "axios";
const PaymentUserDetail = () =>
{
    const history = useHistory();
    const [formValue,setFormValue] = useState({
        firstname:"", lastname:"", email:"", number:"", city:"", state:"",
        code:"", address:""
    });
    const [formErrors,setFormErrors] = useState({
        fname:"", lname:"", eremail:"", ernumber:"", 
    ercity:"", erstate:"", ercode:"", eraddress:""
    });
    const handleChange = (e) =>
    {
        const {name,value} =e.target;
        setFormValue({...formValue, [name]:value});
    }
    const handleSubmit = (event) =>
    {
       event.preventDefault();
       validate(formValue);
    }
    const validate = (values) =>
    {
         const errors={};
         var flag=false;
         if(!values.firstname)
         {
            flag=true;
            errors.fname="required";
         }
        if(!values.lastname)
        {
            flag=true;
            errors.lname="required";
        }
        if(!values.email)
        {
            flag=true;
            errors.eremail="required";
        }
        if(!values.number)
        {
            flag=true;
            errors.ernumber="required";
        }
        if(!values.city)
        {
            flag=true;
            errors.ercity="required";
        }
        if(!values.state)
        {
            flag=true;
            errors.erstate="required";
        }
        if(!values.code)
        {
            flag=true;
            errors.ercode="required";
        }
        if(!values.address)
        {
            flag=true;
            errors.eraddress="required";
        }
        setFormErrors(errors);
        if(flag === false)
        {
            const email = values.email;
            axios.post("http://localhost:3002/orderdataget",{
                email
            }).then((response)=>
            {
                history.push("/paymentMode");
            })
            .catch((err)=>
            {
                alert(err);
            })
        }
    }
    return(<div className="container">
        <div className="user_detail_div">
            <h1 className="user_detail_head">Customer Detail</h1>
            <form onSubmit={handleSubmit}>
            <div className="row user_detail_label">
                <div className="col-6">
                    <label>First Name</label>
                </div>
                <div className="col-6">
                    <label>Last Name</label>
                </div>
            </div>
                <div className="row user_detail_input">
                    <div className="col-6">
                    <input type="text" name="firstname" placeholder=""
                    autoComplete="off" value={formValue.firstname}
                    onChange={handleChange}></input>
                    <p className="error_field">{formErrors.fname}</p>
                    </div>
                    <div className="col-6">
                    <input type="text" name="lastname" placeholder=""
                    autoComplete="off" value={formValue.lastname}
                    onChange={handleChange}></input>
                    <p className="error_field">{formErrors.lname}</p>

                    </div>
                </div>
            <div className="row user_detail_label">
                <div className="col-6">
                    <label>Email Address</label>
                </div>
                <div className="col-6">
                    <label>Phone Number</label>
                </div>
            </div>
            <div className ="row user_detail_input">
                <div className="col-6">
                <input type="email" name="email" placeholder=""
                autoComplete="off" value={formValue.email}
                onChange={handleChange}></input>
                 <p className="error_field">{formErrors.eremail}</p>
                </div>
                <div className="col-6">
                <input type="number" name="number" placeholder=""
                autoComplete="off" value={formValue.number}
                onChange={handleChange}></input>
                 <p className="error_field">{formErrors.ernumber}</p>
                </div>
            </div>
            <div className="row user_detail_label">
                <div className="col-6">
                    <label>City</label>
                </div>
                <div className="col-6">
                    <label>State</label>
                </div>
            </div>
            <div className="row user_detail_input">
                <div className="col-6">
                <input type="text" name="city" placeholder=""
                autoComplete="off" value={formValue.city}
                onChange={handleChange}></input>
                 <p className="error_field">{formErrors.ercity}</p>
                </div>
                <div className="col-6">
                <input type="text" name="state" placeholder=""
                autoComplete="off" value={formValue.state}
                onChange={handleChange}></input>
                 <p className="error_field">{formErrors.erstate}</p>
                </div>
            </div>
            <div className="row user_detail_label">
                <div className="col-6">
                    <label>City Code</label>
                </div>
                <div className="col-6">
                    <label>Full Address</label>
                </div>
            </div>
            <div className="row user_detail_input">
                <div className="col-6">
                <input type="number" name="code" placeholder=""
                autoComplete="off" value={formValue.code}
                onChange={handleChange}></input>
                 <p className="error_field">{formErrors.ercode}</p>
                </div>
                <div className="col-6">
                <textarea name="address" placeholder="" row="10"
                col="60" autoComplete="off" value={formValue.address}
                onChange={handleChange}></textarea>
                 <p className="error_field">{formErrors.eraddress}</p>
                </div>
            </div>
            <div>
            <input type="submit" className="placeorder_btn" placeholder="PlaceOrder"></input>
            </div> 
            </form>   
        </div>
    </div>);
}

export default PaymentUserDetail;