import React from "react";
import "./LogIn.css"
import "./font-awesome.css"
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import myIP from "../../../MyIP";


const LogIn = (props) => {
    const navigate = useNavigate()
    const [info, setInfo] = React.useState({
        username: "",
        password: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))

    }

    function handleSubmit(event) {
        // console.log(event.target.value)
        event.preventDefault()

        axios.post(`${myIP}/users/token/`,info)
            .then(res=>{
                localStorage.setItem('accessToken',JSON.stringify(res.data.access))
                localStorage.setItem('refreshToken',JSON.stringify(res.data.refresh))
                props.auth()
                navigate('/')
            })
            .catch(err => {
                alert('Неверный логин или пароль!')
            })

    }

    return (
        <div className="container--login">
            <div className="login">
                <form onSubmit={handleSubmit} className="login--form" action="src/components/pages/LogIn/LogIn">
                    <div className="login--input">
                        <input
                            type="email"
                            name="username"
                            placeholder="Введите электронную почту"
                            required="required"
                            onChange={handleChange}/>
                    </div>
                    <div className="login--input">
                        <input
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                            required="required"
                            onChange={handleChange}/>
                    </div>
                    <input
                        className="login--button"
                        type="submit"
                        name="submit"
                        value="ВОЙТИ"/>
                    <br/>
                    <a href="src/components/pages/LogIn/LogIn">Восстановление пароля</a>
                </form>
                <div className="login--social">
                    <i className="fa fa-vk" aria-hidden="true"></i>
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-odnoklassniki" aria-hidden="true"></i>
                    <i className="fa-regular fa-calendar-circle-plus" aria-hidden="true"></i>
                </div>
                <p>Ещё нет аккаунт?<NavLink to="/signup">Зарегестрироватся</NavLink></p>
            </div>
        </div>
    )
}
export default LogIn