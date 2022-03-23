import React,{useState} from "react";
import "./Register.css";
import {NavLink,useHistory} from "react-router-dom";
import axios from "axios";
const Register = () =>
{
  const history = useHistory();
  const [user,setUser] = useState({
    name:"", email:"", phone:"", password:"", cpassword:""
  });
  const handleInput = (event) =>
  {
    const {name,value} = event.target;
    setUser({
      ...user,
      [name]:value
    });
  }
  const PostData = async(e) =>
  {
    e.preventDefault();
    const {name,email,phone,password,cpassword} = user;
    axios.post("http://localhost:3002/register",{
      name,email,phone,password,cpassword
    })
    .then((response)=>{
      alert("Registration Successfull");
      history.push("/signin");

    })
    .catch((err)=>alert("Registration Unsuccessfull"));
  }
  return(<>
    <div className="container-fluid">
        <div className="register_div">
            <h3 className="register_title">Create Account</h3>
            <form method="POST">
            <div className="register_label">
              <label>Your Name</label>
            </div>
            <div className="register_input_margin">
              <input type="text" placeholder="" className="register_input"
                name="name" value={user.name} autoComplete="off"
                onChange={handleInput}/><br/>
            </div>
            <div className="register_label">
              <label>Your Email</label>
            </div>
            <div className="register_input_margin">
              <input type="email" placeholder="" className="register_input"
                name="email" value={user.email} autoComplete="off"
                onChange={handleInput}/><br/>
            </div>
            <div className="register_label">
              <label>Your Mobile Number</label>
            </div>
            <div className="register_input_margin">
              <input type="Number" placeholder="" className="register_input"
                name="phone" value={user.phone} autoComplete="off"
                onChange={handleInput}/><br/>
            </div>
            <div className="register_label">
              <label>Enter Password</label>
            </div>
            <div className="register_input_margin">
              <input type="password" placeholder="" className="register_input"
                name="password" value={user.password} autoComplete="off"
                onChange={handleInput}/><br/>
            </div>
            <div className="register_label">
              <label>Re-enter Password</label>
            </div>
            <div className="register_input_margin">
              <input type="password" placeholder="" className="register_input"
                name="cpassword" value={user.cpassword} autoComplete="off"
                onChange={handleInput}/><br/>
            </div>
            <input type="submit" className="register_btn"
            onClick={PostData} name="register" value="Continue">
            </input>
            </form>
            <div className="row already_register">
              <div className="col-lg-6 already_register_text">
                Already have an account</div>
              <div className="col-lg-4">
                <NavLink to="/signin" className="already_register_signin">
                  Sign-in</NavLink>
              </div>
            </div>
        </div>
    </div>
  </>);
}

export default Register;