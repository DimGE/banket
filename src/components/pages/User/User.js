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

    const [userInfo, setUserInfo] = useState({
        first_name: "",
        last_name: "",
        email: ""
    })
    const [myEvents, setMyEvents] = useState([])

    useEffect(() => {
        axios.get(`${myIP}/users/profile/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(res => {
                setUserInfo(res.data)
            })
    }, [])

    const get_info = () => {
        axios.get(`${myIP}/banket/events/my-events/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(res => {
                setMyEvents(res.data)
            })
    }

    useEffect(() => {
        get_info()
    }, [])


    const delete_event = (id) => {

        axios.delete(`${myIP}/banket/events/${id}/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(() => {
                get_info()
            })
    }

    const choise_event = (id)=>{
        localStorage.setItem('current_event',JSON.stringify(id))
        console.log(JSON.parse(localStorage.getItem('current_event')))
        navigate('/hall')
    }

    const create_new_event = ()=>{
        axios.post(`${myIP}/banket/events/`,{}, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(() => {
                get_info()
            })
            .catch(err=>{
                console.log(err.request.response)
                console.log('Создалось')

            })
    }


    const events = myEvents.map(event =>
        <Event
            key={event.id}
            name={event.event_type}
            caunt={event.guest_count}
            data={event.date_planned}
            price={event.total_price}
            state={event.is_passed}
            delete_event={() => {
                delete_event(event.id)
            }}
            choise_event={()=>{
                choise_event(event.id)
            }}
        />
    )


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
                    <p>Открыть</p>
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


                    <div onClick={create_new_event} className="user_creat">

                        <h4 id="creat" className="ivent_button">Создать новое </h4>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>

                    </div>


            </div>


        </div>
    );
};

export default User;