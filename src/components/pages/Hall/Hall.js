import React, {useEffect, useState} from 'react';
import "./Hall.css"
import Place from "./Place/Place";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import myIP from "../../../MyIP";
import Guest from "./Place/Guest";
import Option from "./Option";
import Dish from "./Place/Dish";
import option from "./Option";
import "./style"


const Hall = (props) => {
    let currentDate = new Date().toJSON().slice(0, 10)
    const navigate = useNavigate()
    const [table, setTable] = React.useState([])
    const [place_num, set_place_num] = useState()
    const [all_guests, setAll_guest] = useState([])
    const [info, setInfo] = React.useState({
        first_name: "",
        last_name: "",
        email: ""
    })

    const [show, setShow] = React.useState(false)
    const [showChange, setShowChange] = React.useState(false)
    const [guestInfo, setGuestInfo] = React.useState({
        id: ""
    })
    const [eventInfo, setEventInfo] = React.useState({})
    const [allOptions, setAllOptions] = useState([])
    const [render_allOptions, setRender_allOptions] = useState([])
    const [myOrders, setMyOrders] = useState([])
    const [allDishes, setAllDishes] = useState([])
    const [newOrder, setNewOrder] = useState({
        id: "",
        amount: ""
    })
    const [newlyweds, setNewlyweds] = React.useState({
        man_fullname: "",
        women_fullname: ""
    })


    const get_seats = () => {
        axios.get(`${myIP}/banket/events/${JSON.parse(localStorage.getItem('current_event'))}/event-seats/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(res => {
                setTable(res.data)
            })
    }

    const get_eventInfo = () => {
        axios.get(`${myIP}/banket/events/${JSON.parse(localStorage.getItem('current_event'))}/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(res => {
                setEventInfo(res.data)
            })
    }


    useEffect(() => {
        get_seats()
        get_eventInfo()
    }, [])


    function handleChange(event) {
        const {name, value} = event.target
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))
    }

    let places1 = []
    let places2 = []
    let places3 = []
    let places4 = []
    let places5 = []

    for (let i = 0; i < 75; i++) {
        if (i >= 0 && i < 19) {
            places1.push(table[i])
        } else if (i >= 19 && i < 33) {
            places2.push(table[i])
        } else if (i >= 33 && i < 47) {
            places3.push(table[i])
        } else if (i >= 47 && i < 61) {
            places4.push(table[i])
        } else {
            places5.push(table[i])
        }

    }


    places1 = places1.map(place => <Place
        {...place}
        selectPlace={() => selectPlace(place.id, place.number)}
    />)
    places2 = places2.map(place => <Place
        {...place}
        selectPlace={() => selectPlace(place.id, place.number)}
    />)
    places3 = places3.map(place => <Place
        {...place}
        selectPlace={() => selectPlace(place.id, place.number)}
    />)
    places4 = places4.map(place => <Place
        {...place}
        selectPlace={() => selectPlace(place.id, place.number)}
    />)
    places5 = places5.map(place => <Place
        {...place}
        selectPlace={() => selectPlace(place.id, place.number)}
    />)


    function selectPlace(id, number) {
        setShow(true)
        set_place_num(number)
    }

    const save_guest = (event) => {
        event.preventDefault()
        axios.post(`${myIP}/banket/guest/`, {
            "first_name": info.first_name,
            "last_name": info.last_name,
            "email": info.email,
            "seat": place_num,
            "event": JSON.parse(localStorage.getItem('current_event'))
        }, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(() => {
                get_seats()
                get_info()
                setShow(false)
                event.target.reset()
                setInfo({
                    first_name: "",
                    last_name: "",
                    email: ""
                })
            })
            .catch(err => {
                console.log(err.request.response)
            })

    }

    const get_info = () => {
        axios.get(`${myIP}/banket/events/${JSON.parse(localStorage.getItem('current_event'))}/event-guests/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(res => {
                setAll_guest(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    useEffect(() => {
        get_info()
    }, [])

    const delete_guest = (id) => {
        axios.delete(`${myIP}/banket/guest/${id}/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(() => {
                get_info()
                get_seats()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const leave_guest = (id) => {
        axios.get(`${myIP}/banket/guest/${id}/make-seat-free/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(res => {
                get_info()
                get_seats()
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const change_seat = (id) => {
        setShowChange(!showChange)
        setGuestInfo({
            id: id
        })
    }
    const change_seat_submit = (event) => {
        event.preventDefault()
        axios.post(`${myIP}/banket/guest/${guestInfo.id}/change-seat/`, {
            "seat_number": event.target.seat.value,
            "event_id": JSON.parse(localStorage.getItem('current_event'))
        }, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(() => {
                get_info()
                get_seats()
                setShowChange(!showChange)
                setGuestInfo({
                    id: ""
                })
            })
            .catch(err => {
                alert('Данное место занято ')
                console.log(err.message)
            })

    }

    const guest = all_guests.map((el) =>
        <Guest
            key={el.id}
            {...el}
            delete_guest={() => {
                delete_guest(el.id)
            }}
            leave_guest={() => {
                leave_guest(el.id)
            }}
            change_seat={() => {
                change_seat(el.id)
            }}
        />
    )

    const change_event = (event, data) => {
        event.preventDefault()
        axios.patch(`${myIP}/banket/events/${JSON.parse(localStorage.getItem('current_event'))}/`,
            data, {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
                }
            })
            .then(() => {
                get_eventInfo()

            })
            .catch(err => {
                if (err.response.data.date_planned) {
                    setEventInfo(prevState => ({
                        ...prevState,
                        date_planned: ""
                    }))
                    alert('Данная дата уже занята')
                }
            })
    }

    useEffect(() => {
        axios.get(`${myIP}/banket/events/all-options/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(res => {
                setAllOptions(res.data)
            })
    }, [])

    useEffect(() => {
        axios.get(`${myIP}/banket/dishes/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(res => {
                setAllDishes(res.data)
            })
    }, [])


    const new_order_submit = (event) => {
        event.preventDefault()

        axios.post(`${myIP}/banket/order/`, {
            "dish": newOrder.id,
            "amount": newOrder.amount,
            "event": JSON.parse(localStorage.getItem('current_event'))
        }, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(() => {
                get_myOrders()
                setNewOrder(prevState => {
                    return (
                        {
                            ...prevState,
                            amount: ""
                        }
                    )
                })
            })
            .catch(err => {
                console.log(err.message)
            })


    }


    const get_myOrders = () => {
        axios.get(`${myIP}/banket/events/${JSON.parse(localStorage.getItem('current_event'))}/my-ordered-dishes/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(res => {
                setMyOrders(res.data)
            })
    }


    useEffect(() => {
        get_myOrders()
    }, [])

    const renderMyOrders = myOrders.map(el =>
        <Dish
            {...el}
            delete_order={() => {
                delete_order(el.id)
            }}
        />
    )

    const delete_order = (id) => {
        axios.delete(`${myIP}/banket/order/${id}/`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(() => {
                get_myOrders()
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        if (eventInfo) {
            setRender_allOptions(allOptions.map(el =>
                    <Option
                        key={el.id}
                        {...el}
                        addOption={() => {
                            addOptions(el.id)
                        }}
                        removeOption={() => {
                            removeOptions(el.id)
                        }}
                        isChecked={
                            eventInfo.add_options.some((element) => {
                                return element.id === el.id
                            })
                        }

                    />
                )
            )
        }

    }, [eventInfo])


    const addOptions = (id) => {
        axios.patch(`${myIP}/banket/events/${JSON.parse(localStorage.getItem('current_event'))}/add-options/`,
            {
                "add_options": [id]
            }, {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
                }
            })
            .then(() => {
                get_eventInfo()
            })
            .catch(err => {
                console.log(err.request.response)
            })
    }

    const removeOptions = (id) => {
        axios.patch(`${myIP}/banket/events/${JSON.parse(localStorage.getItem('current_event'))}/delete-options/`,
            {
                "add_options": [id]
            }, {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
                }
            })
            .then(() => {
                get_eventInfo()
            })
            .catch(err => {
                console.log(err.request.response)
            })
    }

    const change_marry_info = (event) => {
        const {name, value} = event.target
        setNewlyweds(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))
    }

    const send_invitation = (event) => {
        event.preventDefault()
        axios.post(`${myIP}/banket/events/${JSON.parse(localStorage.getItem('current_event'))}/send-invitations/`, {
            "man_fullname": newlyweds.man_fullname,
            "women_fullname": newlyweds.women_fullname,
        }, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
            }
        })
            .then(() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
            })
            .catch(err => {
                if (!eventInfo.data) alert("Укажите дату")
            })

    }
    useEffect(() => {
        if (!props.auth) {
            navigate('/')
        }
    }, [props.auth])

    return (

        <div className="hall">

            <div className="hall_event_info">

                {eventInfo.event_type ?
                    <div className="event_name">

                        <p aria-label="CodePen">
                            {[...eventInfo.event_type].map((el) => {
                                return (
                                    <span data-text={el}>{el}</span>
                                )
                            })}
                        </p>
                    </div> :
                    <div className= "loader_container" >
                        {/*<div className="loader" style="--b: 20px;--c:#000;width:80px;--n:15;--g:7deg"></div>*/}
                        <h3>Загрузка данных...</h3>
                        <div className="loader"></div>
                    </div>
                }

                {/*<h1 className="event_type">{eventInfo.event_type}</h1>*/}
                <br/>
                <div className="change_event_info">
                    <select value={eventInfo.event_type}
                            onChange={event => change_event(event, {'event_type': event.target.value})}>
                        <option value="OTHER">Другое</option>
                        <option value="BIRTHDAY">День рождения</option>
                        <option value="WEDDING">Свадьба</option>
                        <option value="CHRISTENING">Крестины</option>
                    </select>
                    <input
                        type="date"
                        min={currentDate}
                        value={eventInfo.date_planned}
                        onChange={event => change_event(event, {'date_planned': event.target.value})}
                    />
                </div>
            </div>
            <div className="hall_places">

                <div className="tables">
                    <div className="hall-first">
                        <div className="hall-table1">
                            {places1}
                            <div className="tb1">
                                Стол №1
                            </div>
                        </div>
                    </div>

                    <div className="hall-second">
                        <div className="hall-table2">
                            {places2}
                            <div className="tb2">
                                Стол №2
                            </div>
                        </div>
                        <div className="hall-table3">
                            {places3}
                            <div className="tb3">
                                Стол №3
                            </div>
                        </div>
                    </div>

                    <div className="hall-third">

                        <div className="hall-table4">
                            {places4}
                            <div className="tb4">
                                Стол №4
                            </div>
                        </div>
                        <div className="hall-table5">
                            {places5}
                            <div className="tb5">
                                Стол №5
                            </div>
                        </div>
                    </div>
                </div>

                {show && <div className="form-place">
                    <form onSubmit={save_guest}>
                        <h3>Место: {place_num}</h3>
                        <input
                            type="text"
                            placeholder="Имя"
                            name="first_name"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Фамилия"
                            name="last_name"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Почта"
                            name="email"
                            onChange={handleChange}

                        />

                        <div className="place_buttons">
                            <input type="submit" value="СОХРАНИТЬ"/>
                            <input onClick={() => {
                                setShow(!show)
                            }} type="button" value="ВЫЙТИ"/>
                        </div>

                    </form>

                </div>
                }
            </div>
            <div className="hall_guests">
                <h1 id="myivets">Список гостей </h1>
                <div id="head" className="guest">
                    <p>Имя</p>
                    <p>Фамилия</p>
                    <p>Почта</p>
                    <p>Место</p>
                    <p>Освободить</p>
                    <p>Удалить</p>
                </div>
                {guest}
            </div>
            {showChange && <div className="change_seats">
                <form className="change_seat" onSubmit={change_seat_submit} action="">
                    <input
                        type="text"
                        placeholder="Укажите место"
                        name="seat"
                    />
                    <input
                        type="submit"
                        value="Сохранить"
                    />
                </form>
            </div>}

            <div className="options">
                <h1>Дополнительные услуги</h1>
                <div id="head" style={{borderRadius: "0px"}} className="option1">
                    <p>Название</p>
                    <p>Описание</p>
                    <p>Цена</p>
                    <p>Действие</p>
                </div>
                {render_allOptions}
            </div>

            <div className="options">
                <h1>Заказанные блюда</h1>
                <div id="head" className="dish">
                    <p>Название</p>
                    <p>Описание</p>
                    <p>Количество</p>
                    <p>Цена</p>
                    <p>Удалить</p>
                </div>
                {renderMyOrders}
            </div>
            <form className="new_order_form" onSubmit={new_order_submit}>
                <h1>Заказать блюдо</h1>
                <select onChange={(e) => {
                    setNewOrder(prev => {
                        const id = e.target.childNodes[e.target.selectedIndex].getAttribute("id")
                        return (
                            {
                                ...prev,
                                id: id
                            }
                        )
                    })
                }}>
                    <option value="default">Выберите блюдо</option>
                    {allDishes.map(el => <option id={el.id} value={el.name}>{`${el.name} (${el.price} лей)`}</option>)}
                </select>
                <input
                    type="text"
                    name="amount"
                    placeholder="Количество порций"
                    required="required"
                    value={newOrder.amount}
                    onChange={(e) => {
                        setNewOrder(prev => {
                            return (
                                {
                                    ...prev,
                                    amount: e.target.value
                                }
                            )
                        })
                    }}
                />
                <input type="submit"/>
            </form>

            {eventInfo.event_type === "WEDDING" &&
                <div className="send_invite_container">
                    <form className="send_invite" onSubmit={send_invitation}>
                        <h2>Приглашения</h2>
                        <input
                            type="text"
                            name="man_fullname"
                            placeholder="Имя и фамилия жениха"
                            required="required"
                            onChange={change_marry_info}
                        />
                        <input
                            type="text"
                            name="women_fullname"
                            placeholder="Имя и фамилия невесты"
                            required="required"
                            onChange={change_marry_info}
                        />
                        <input
                            type="submit"
                            value="Отправить приглашения"
                        />
                    </form>
                </div>
            }


        </div>
    );

};

export default Hall;