import React from "react";
import "./SignUp.css"

const SignUp = ()=>{
    return(
        <div className="container--signup">
            <div className="signup">
                <form className="signup--form" action="">
                    <div className="signup--input">
                        <input type="text" name="username" placeholder="Введите имя" required="required"/>
                    </div>
                    <div className="signup--input">
                        <input type="text" name="username" placeholder="Введите e-mail" required="required"/>
                    </div>
                    <div className="signup--input">
                        <input type="text" name="username" placeholder="Введите телефон" required="required"/>
                    </div>
                    <div className="signup--input">
                        <input type="password" name="password" placeholder="Введите пароль" required="required"/>
                    </div>
                    <input className="signup--button" type="submit" name="submit" value="РЕГИСТРАЦИЯ"/>
                    <br/>
                </form>

                <p>Уже есть аккаунт?<a href="#">Войти</a></p>
            </div>
        </div>
    )
}

export default SignUp