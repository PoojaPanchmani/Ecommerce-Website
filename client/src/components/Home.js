import React from "react";
import ProductHomePrint from "./ProductHomePrint.js";
import CarouselHome from "./CarouselHome.js";
import HomeProduct from "./HomeProduct.js";
import "./Home.css";
import {NavLink} from "react-router-dom";
function productprint(val)
{
    return(<>
    <ProductHomePrint
    img={val.img}
    name={val.name}
    category={val.category}
    dis_price={val.dis_price}
    org_price={val.org_price}
    save_price={val.save_price}
    />
    </>)
}
const Home = () =>
{
    return(<>
    <div id="top">
    <CarouselHome/>
    <div style={{display:"flex",flexWrap:"wrap"}}>
     {HomeProduct.map(productprint)}
    </div>
    <div className="back_top">
        <a className="back_top_link" href="#top">Back to Top</a>
    </div>
    <div className="internal_detail d-flex justify-content-around">
        <div className="know_us">
            <p className="title">Get to Know About us</p>
            <div className="title_detail">
               <NavLink className="row title_detail_link" to="/contactus">Contact Us</NavLink>
               <NavLink className="row title_detail_link" to="/aboutus">About Us</NavLink>
            </div>
        </div>
        <div className="mail_us">
            <p className="title">Mail Us</p>
            <div className="title_detail">
               <p>poojapanchmani@gmail.com</p>
            </div>
        </div>
        <div className="help">
            <p className="title">Help</p>
            <div classNAme="title_detail">
            </div>
        </div>
    </div>
    </div>
    </>);
}
export default Home;