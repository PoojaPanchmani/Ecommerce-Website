import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar1 from "./components/Navbar1.js";
import Navbar2 from "./components/Navbar2.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Signin from "./components/Signin.js";
import Addtocart from "./components/Addtocart.js";
import SearchPrint from "./components/SearchPrint.js";
import {Route} from "react-router-dom";
import ProductPrint from "./components/ProductPrint.js";
import YourAccount from "./components/YourAccount.js";
import ProductDetailPrint from "./components/ProductDetailPrint";
import "./App.css";
import PaymentUserDetail from "./components/PaymentUserDetail";
import PaymentMode from "./components/PaymentMode";
import StripeContainer from "./components/StripeContainer";
import PaymentSuccess from "./components/PaymentSuccess.js";
import Order from "./components/Order.js";
import ContactUs from "./components/ContactUs.js";
import AboutUs from "./components/AboutUs.js";
import RemoveData from "./components/RemoveData.js";
const App = () =>
{
    return(<>
    <Route exact path="/">
      <Navbar1/>
      <Navbar2/>
      <Home/>
    </Route>
    <Route exact path="/signin">
      <Signin/>
    </Route>
    <Route exact path="/register">
      <Register/>
    </Route>
    <Route exact path="/addtocart">
      <Addtocart/>
    </Route>
    <Route path="/product">
      <SearchPrint/>
    </Route>  
    <Route path="/book">
      <ProductPrint name={"book"}/>
    </Route>
    <Route path="/laptop">
      <ProductPrint name={"laptop"}/>
    </Route>
    <Route path="/mobile">
      <ProductPrint name={"mobile"}/>
    </Route>
    <Route path="/account">
      <YourAccount/>
    </Route>
      <Route path="/production/:name">
      <ProductDetailPrint/>
    </Route>
    <Route path="/paymentuserdetail">
      <PaymentUserDetail/>
      </Route>
    <Route path="/paymentMode">
      <PaymentMode/>
    </Route>
    <Route path="/online_payment">
      <StripeContainer/>
    </Route>
    <Route path ="/paymentsuccess">
      <PaymentSuccess/>
    </Route>
    <Route path="/order">
      <Order/>
    </Route>
    <Route path="/contactus">
      <ContactUs/>
    </Route>
    <Route path="/aboutus">
     <AboutUs/>
    </Route>
    <Route path="/remove/:name">
      <RemoveData/>
    </Route>
    </>)
}

export default App;