import React from "react";
import "./SignUp.css"
import {NavLink} from "react-router-dom";

const SignUp = ()=>{
    const [show,setShow] = React.useState(false)
    const [info,setInfo] = React.useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    function handleChange(event){
        const {name,value} = event.target
        setInfo(prevInfo =>({
            ...prevInfo,
            [name]:value
        }))

    }
    function handleSubmit(event){
        console.log(event.target.value)
        event.preventDefault()
        console.log(info)
    }
    return(
        <div className="container--signup">
            <div className="signup">
                <form   onSubmit={handleSubmit} className="signup--form" action="src/components/pages/SignUp/SignUp">
                    <div className="signup--input">
                        <input
                            type="text"
                            name="first_name"
                            onChange={handleChange}
                            placeholder="Введите имя"
                            required="required"/>
                    </div>
                    <div className="signup--input">
                        <input
                            type="text"
                            name="last_name"
                            onChange={handleChange}
                            placeholder="Введите фамилию"
                            required="required"/>
                    </div>
                    <div className="signup--input">
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="Введите e-mail"
                            required="required"/>
                    </div>
                    {/*<div className="signup--input">*/}
                    {/*    <input type="text" name="username" placeholder="Введите телефон" required="required"/>*/}
                    {/*</div>*/}
                    <div className="signup--input">
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Введите пароль"
                            required="required"/>
                    </div>
                    <input onClick={()=>setShow(!show)} className="signup--button"
                           type="submit"
                           name="submit"
                           value="РЕГИСТРАЦИЯ"/>
                    <br/>
                </form>

                {/*<p>Уже есть аккаунт?<a href="#">Войти</a></p>*/}
                <p>Уже есть аккаунт?<NavLink to="/login">Войти</NavLink></p>
                <br/>
                {show && <div style={{background: "rgba(15,111,56,0.75)"}} className="sign--status">
                    Регистрация успешно пройдена
                </div>}
            </div>
        </div>
    )
}

export default SignUp