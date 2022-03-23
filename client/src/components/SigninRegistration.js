import React from "react";
import "./SigninRegistration.css";
const SigninRegistration = ()=>
{
       return(<>
       <button  type="button" className="sign_regis_btn"
       data-bs-toggle="modal" data-bs-target="#mymodal">Sign/<br/>Registration
       </button>
       <div className="modal modal_size" id="mymodal">
           <div className="modal-dialog">
               <div className="modal-content">
                   <div className="modal-body">
                       <a href="/signin">
                           <button className="Signin_button">
                               SignIn
                           </button>
                       </a>
                       <button type="button" className="close close_arrow" 
                   data-bs-dismiss="modal">&times;</button>
                       <div className="row new_customer">
                           <div className="col-md-2"></div>
                            <p className="col-md-4 new_customer_text">New Customer ?</p>
                            <a className="col-md-6 new_customer_link"
                            href="/register">registraion here before</a>
                       </div>
                       <div className="your_account_head">Your Account</div>
                       <a className="your_account_detail" href="/account">
                           <label>Profile</label></a><br/>
                   </div>
               </div>
           </div>
       </div>
       </>);
} 
export default SigninRegistration;