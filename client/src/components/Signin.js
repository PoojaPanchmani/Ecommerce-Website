import React,{useState} from "react";
import "./Signin.css";
import axios from "axios";
import {useHistory} from "react-router-dom";
const Signin = () =>
{
  const history = useHistory();
  const [user,setUser] = useState({
    email:"", password:""
  });
  let name,value;
  const inputhandle = (event) =>
  {
     name = event.target.name;
     value = event.target.value;
     setUser({
       ...user,
       [name]:value
     });
  }
  const PostData = async(event) =>
  {
      event.preventDefault();
      const {email,password} = user;
      axios.post("http://localhost:3002/signin",{
        email,password
      })
      .then((response)=>
      {
        alert("Login Successfull");
        history.push("/");
      })
      .catch((err)=>alert("Login Unsuccessfull"));
  }
    return(<>
       <div className="container-fluid">
           <div className="sign_in_div">
            <h3 className="sign_in_title">Sign-In</h3>
            <form method="POST">
            <div className="sign_in_label">
              <label>Your Email</label>
            </div>
            <div className="sing_in_input_margin">
              <input type="email" placeholder="" className="sign_in_input"
              name="email"  value={user.email} autoComplete="off" 
              onChange={inputhandle}
              /><br/>
            </div>
            <div className="sign_in_label">
              <label>Enter Password</label>
            </div>
            <div className="sign_in_input_margin">
              <input type="password" placeholder="" className="sign_in_input"
              name="password" value={user.password} 
              autoComplete="off" onChange={inputhandle} 
              /><br/>
            </div>
            <button type="button"  className="sign_in_btn"
            onClick={PostData}>Continue
            </button>
            </form>
            <div className="row create_account">
              <div className="col-lg-6 create_account_text">
                New Customer?</div>
              <div className="col-lg-4">
                <a href="/register" className="create_account_register">
                  Create account</a>
              </div>
            </div>
           </div>
       </div>
    </>)
}

export default Signin;