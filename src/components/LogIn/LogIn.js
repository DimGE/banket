import React from "react";
import "./LogIn.css"
import "./font-awesome.css"
import {NavLink} from "react-router-dom";

const LogIn = () => {
    return (
        <div className="container--login">
            <div className="login">
                <form className="login--form" action="">
                    <div className="login--input">
                        <input type="email" name="username" placeholder="Введите электронную почту" required="required"/>
                    </div>
                    <div className="login--input">
                        <input type="password" name="password" placeholder="Введите пароль" required="required"/>
                    </div>
                    <input className="login--button" type="submit" name="submit" value="ВОЙТИ"/>
                    <br/>
                    <a href="#">Восстановление пароля</a>
                </form>
                <div className="login--social">
                <i className="fa fa-vk" aria-hidden="true"></i>
                <i className="fa fa-google-plus" aria-hidden="true"></i>
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-odnoklassniki" aria-hidden="true"></i>
                </div>
                <p>Ещё нет аккаунт?<NavLink to="/signup">Зарегестрироватся</NavLink></p>
            </div>
        </div>
    )
}
export default LogIn