import React from "react";
import './Navbar.css'
import logo from "../../img/StartPageImg/logo.png"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <NavLink to="/startpage">
                <div className="nav--logo">
                    <img className="logo--img" src={logo} alt=""/>
                    <h2 className="logo--text">Perfect view</h2>
                </div>
            </NavLink>

            <div className="nav--login">
                <div className="login--text">
                    {/*<p className="login--sign">LOG IN</p>*/}
                    <NavLink to="/login" className="login--sign">LOG IN</NavLink>
                </div>
                <div className="login--text">
                    {/*<p className="login--sign">SIGN UP</p>*/}
                    <NavLink to="/signup" className="login--sign">SIGN UP</NavLink>
                </div>
            </div>

        </div>
    )
}
export default Navbar