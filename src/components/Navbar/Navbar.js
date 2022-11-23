import React, {useState} from "react";
import './Navbar.css'
import logo from "../../img/StartPageImg/logo.png"
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    return (
        <div className="nav">
            <NavLink to="/">
                <div className="nav--logo">
                    <img className="logo--img" src={logo} alt=""/>
                    <h2 className="logo--text">Perfect view</h2>
                </div>
            </NavLink>

            <div className="nav--login">

                {
                    props.auth &&
                    <div className="ligin--all">
                        <div className="login--text">
                            <NavLink to="/user" className="login--sign">ПРОФИЛЬ</NavLink>
                        </div>

                        <div onClick={props.removeUser} className="login--text">
                            <NavLink to="/" className="login--sign">ВЫЙТИ</NavLink>
                        </div>

                    </div>
                }
                {
                    !props.auth &&

                    <div className="ligin--all">
                        <div className="login--text">
                            <NavLink to="/login" className="login--sign">ВОЙТИ</NavLink>
                        </div>
                        <div className="login--text">
                            <NavLink to="/signup" className="login--sign">РЕГИСТРАЦИЯ</NavLink>
                        </div>
                    </div>

                }


            </div>
        </div>
    )
}

export default Navbar