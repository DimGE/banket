import React, {useEffect, useState} from 'react';
import "./User.css"
import "./font-awesome.css"
import profile from "../../../img/profile.png"
import Event from "./Event";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import myIP from "../../../MyIP";

const User = (props) => {
    const navigate = useNavigate()

    const [userInfo,setUserInfo] = useState({
        first_name:"",
        last_name:"",
        email:""
    })
    const [myEvents,setMyEvents] = useState([])
    const [changes,setChanges] = useState(true)

    useEffect(()=>{
    axios.get(`${myIP}/users/profile/`, {headers : {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
        }})
        .then(res=>{
            setUserInfo(res.data)
        })
    },[])

    useEffect(()=>{
        axios.get(`${myIP}/banket/events/my-events/`, {headers : {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }})
            .then(res=>{
                setMyEvents(res.data)
                console.log("Вызвалось")
            })
    },[setChanges])

    const events = myEvents.map(event=>
        <Event
        key={event.id}
        name={event.event_type}
        caunt={event.guest_count}
        data={event.date_planned}
        price={event.total_price}
        state={event.is_passed}
        delete_event={()=>{delete_event(event.id)}}
        />
    )

    const delete_event= (id)=>{

        axios.delete(`${myIP}/banket/events/${id}/`, {headers : {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }})
            .then(res=>{
                console.log(res)

            })
        window.location.reload();

    }


    useEffect(() => {
        if (!props.auth) {
            navigate('/')
        }
    }, [props.auth])
    return (
        <div className="user">

            <div className="profile">
                <img src={profile} alt=""/>
                <div className="info">
                    <p className="labels">Имя</p>
                    <p className="text">{userInfo.first_name}</p>
                </div>
                <div className="info">
                    <p className="labels">Фамилия</p>
                    <p className="text">{userInfo.last_name}</p>
                </div>
                <div className="info">
                    <p className="labels">Почта</p>
                    <p className="text">{userInfo.email}</p>
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
                    <p>Действие</p>
                </div>
                <br/>
                {events}
                {/*<Event/>*/}

                <NavLink to="/hall">
                    <div className="user_creat">

                        <h4 id="creat" className="ivent_button">Создать новое </h4>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>

                    </div>

                </NavLink>

            </div>


        </div>
    );
};

export default User;