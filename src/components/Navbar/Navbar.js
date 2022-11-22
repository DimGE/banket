import React, {useState} from "react";
import './Navbar.css'
import logo from "../../img/StartPageImg/logo.png"
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    // const [auth,setAuth] = useState({
    //     isAuth: localStorage.getItem('accessToken') ? true : false
    // })

    // const remove = () => {
    //     localStorage.removeItem('accessToken')
    //     localStorage.removeItem('refreshToken')
    // }

    return (
        <div className="nav">
            <NavLink to="/startpage">
                <div className="nav--logo">
                    <img className="logo--img" src={logo} alt=""/>
                    <h2 className="logo--text">Perfect view</h2>
                </div>
            </NavLink>

            <div className="nav--login">

                {
                    props.auth &&
                    <div onClick={props.removeUser} className="login--text">
                        {/*<p className="login--sign">LOG IN</p>*/}
                        <NavLink to="/" className="login--sign">ВЫЙТИ</NavLink>
                    </div>
                }
                {
                    !props.auth &&
                    <div className="ligin--all">
                        <div className="login--text">
                            {/*<p className="login--sign">LOG IN</p>*/}
                            <NavLink to="/login" className="login--sign">ВОЙТИ</NavLink>
                        </div>
                        <div className="login--text">
                            {/*<p className="login--sign">SIGN UP</p>*/}
                            <NavLink to="/signup" className="login--sign">РЕГИСТРАЦИЯ</NavLink>
                        </div>
                    </div>

                }


            </div>

        </div>
    )
}
export default Navbar