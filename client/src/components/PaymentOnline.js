import React,{useState} from "react";
import {CardElement,useElements,useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./PaymentBlock.css";
const PaymentOnline = () =>
{
    const [success,setSuccess] = useState(false);
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e) =>
    {
         e.preventDefault();
         const {error,paymentMethod} = await stripe.createPaymentMethod({
             type:"card",
             card:elements.getElement(CardElement)
         })
             try
             {
                axios.post("http://localhost:3002/payment",{
                })
                .then(()=>{
                    setSuccess(true);
                    alert("SuccessFull");
                    history.push("/paymentsuccess");
                })
                .catch((err)=>
                {
                    alert(err.message);
                })
             }
             catch(err)
             {
                 alert(err.message);
             }
    }
    return(<div style={{
        padding:"3rem",}}>
       <div style={{
           maxwidth:"500px",
           margin:"0 auto",
       }}>
           <form onSubmit={handleSubmit}
           style={{
               display:"block",
               width:"100%",
           }}>
               <div style={{
                   display:"flex",
                   flexDirection:"column",
                   alignItems:"center",
                   backgroundColor:"#afafaf",
                   marginTop:"10%",
                   border:"1px groove #afafaf",
                   borderRadius:"5px",

               }}>
                   <CardElement className="card"
                    options={{
                        style:
                        {
                            base:
                            {
                                backgroundColor:"transparent",
                                fontSize:"20px",
                                borderRadius:"5px",
                                color:"white",
                            }
                        }
                    }}>
                        </CardElement>
               </div>
               <button type="submit" className="paymentbtn">
                   {success ? "Loading..." : "Pay"}
                </button>
           </form>
       </div>
    </div>)
}

export default PaymentOnline;