import React from "react";
import './Navbar.css'
import logo from "../../../img/StartPageImg/logo.png"

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav--logo">
                <img className="logo--img" src={logo} alt=""/>
                <h2 className="logo--text">Perfect view</h2>
            </div>

            <div className="nav--login">
                <div className="login--text">
                    <p className="login--sign">LOG IN</p>
                </div>
                <div className="login--text">
                    <p className="login--sign">SIGN UP</p>
                </div>
            </div>

        </div>
    )
}
export default Navbar