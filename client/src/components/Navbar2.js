import React from "react";
import Stopwatch from "./Stopwatch.js";
import "./Navbar2.css";
import {NavLink} from "react-router-dom";
const Navbar2 = () => 
{
    return(<>
        <div className="d-inline-flex navbar2_div">
                <div className="offcanvas offcanvas-start offcanvas_width" id="demo">
                    <div className="offcanvas-header offcanvas_head">
                        <label className="zmdi zmdi-account material-icons-name
                        offcanvas_title_img"></label>
                        <h4 className="offcanvas_title">
                            <i>Hello</i></h4>
                        <button type="button" className="btn-close"
                        data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body"><hr/>
                        <NavLink to="/book" className="offcanvas_link">
                            Book</NavLink><hr/>
                        <NavLink to="/laptop" className="offcanvas_link">
                            Laptop</NavLink><hr/>
                        <NavLink to="/mobile" className="offcanvas_link">
                            Mobile</NavLink><hr/>
                    </div>
                </div>
                <button type="button" data-bs-toggle="offcanvas" 
                data-bs-target="#demo" className="zmdi zmdi-view-headline zmdi-hc-2x
                canvas_btn">
                </button>                
            <div className="stopwatch_div">
                <Stopwatch/>
            </div>
        </div>
    </>);
}

export default Navbar2;