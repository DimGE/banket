import React, {useEffect} from 'react';
import "./User.css"
import "./font-awesome.css"
import profile from  "../../../img/profile.png"
import  Ivent from "./Ivent";
import {NavLink, useNavigate} from "react-router-dom";

const User = (props) => {
    const navigate = useNavigate()
console.log(props.auth)
    useEffect(()=>{
        if(!props.auth){
            navigate('/')
        }
    },[props.auth])
    return (
        <div className="user">

            <div className="profile">
                <img src={profile} alt=""/>
                <div className="info">
                    <p className="labels">Имя</p>
                    <p className="text">Балабан</p>
                </div>
               <div className="info">
                   <p className="labels">Фамилия</p>
                   <p className="text">Дмитрий</p>
               </div>
               <div className="info">
                   <p className="labels">Почта</p>
                   <p className="text">ba@sa.sa</p>
               </div>


            </div>

            <div className="ivents">
                <h1 id="myivets">Мои мероприятия </h1>
                <br/>
                <div id="head" className="ivent">
                    <p>Название</p>
                    <p>Кол-во людей</p>
                    <p>Дата</p>
                    <p>цена</p>
                    <p>Состояние</p>
                </div>
                <br/>
                <Ivent name="Свадьба" caunt="65" data="11.12.2022" price="150000" state="В процессе"/>
                <Ivent name="Свадьба" caunt="65" data="11.11.2022" price="150000" state="Заверщено"/>
                <Ivent name="Свадьба" caunt="65" data="11.12.2022" price="150000" state="В процессе"/>

                {/*<Ivent/>*/}

                <NavLink to="/hall">
                    <div>
                        <p className="ivent_button">Создать своё</p>
                        <i className="fa-regular fa-calendar-circle-plus" aria-hidden="true"></i>
                        {/*<FontAwesomeIcon icon="fa-regular fa-calendar-circle-plus" />*/}
                    </div>

                </NavLink>

            </div>


        </div>
    );
};

export default User;