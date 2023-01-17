import React, {useState} from "react";
import "./SignUp.css"
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import myIP from "../../../MyIP";

const SignUp = () => {
    const [show, setShow] = React.useState(false)
    const [errorType, setErrorType] = useState('')
    const [info, setInfo] = React.useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    function handleChange(event) {
        const {name, value} = event.target
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))

    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post(`${myIP}/users/register/`, info)
            .then(res => {
                navigate('/login')
            })
            .catch(err => {
                setShow(true)
                if (err.response.data.email) {
                    setErrorType('Данная почта уже используется')
                } else if (err.response.data.password){
                    setErrorType('Придумайте другой пароль')
                } else {
                    setErrorType('Проверьте веденные данные')
                }
                    setTimeout(() => {
                        setShow(false)
                    }, 4000)
            })

    }

    return (
        <div className="container--signup">
            <div className="signup">
                <form onSubmit={handleSubmit} className="signup--form" action="">
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
                    <div className="signup--input">
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Введите пароль"
                            required="required"/>
                    </div>
                    <input className="signup--button"
                           type="submit"
                           name="submit"
                           value="РЕГИСТРАЦИЯ"/>
                    <br/>
                </form>
                <p>Уже есть аккаунт?<NavLink to="/login">Войти</NavLink></p>
                <br/>
                {show && <div className="sign--status">
                    {errorType}
                </div>}
            </div>
        </div>
    )
}

export default SignUp