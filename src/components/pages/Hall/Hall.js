import React, {useEffect, useState} from 'react';
import "./Hall.css"
import Place from "./Place/Place";
import {useNavigate} from "react-router-dom";

const Hall = (props) => {
    const navigate = useNavigate()
    const [table, setTable] = React.useState(create_places)
    const [place_num,set_place_num] = useState()
    const [info, setInfo] = React.useState({
        first_name: "",
        last_name: "",
        email: ""
    })
    const [show, setShow] = React.useState(false)
    console.log(show)
    function handleChange(event) {
        const {name, value} = event.target
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))
    }


    function create_places() {
        const newArray = []

        for (let i = 1; i < 76; i++) {
            newArray.push({
                id: i,
                value: i,
                isCheck: false
            })
        }
        return newArray
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


    // const inputs = table.map(el => <InputPlace {...el}/>)

    places1 = places1.map(place => <Place
        {...place}
        selectPlace={() => selectPlace(place.id)}
    />)
    places2 = places2.map(place => <Place
        {...place}
        selectPlace={() => selectPlace(place.id)}
    />)
    places3 = places3.map(place => <Place
        {...place}
        selectPlace={() => selectPlace(place.id)}
    />)
    places4 = places4.map(place => <Place
        {...place}
        selectPlace={() => selectPlace(place.id)}
    />)
    places5 = places5.map(place => <Place
        {...place}
        selectPlace={() => selectPlace(place.id)}
    />)


    function selectPlace(id) {
        // setTable(prevState => prevState.map((place) => {
        //         return place.id === id ?
        //             {...place, isCheck: !place.isCheck} :
        //             place
        //     })
        // )
        setShow(true)
        set_place_num(id)
    }

    const save_guest = ()=>{
        setTable(prevState => prevState.map((place) => {
                return place.id === place_num?
                    {...place, isCheck: !place.isCheck} :
                    place
            })
        )
    }

    useEffect(() => {
        if (!props.auth) {
            navigate('/startpage')
        }
    }, [props.auth])

    return (

        <div className="hall">

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
                        type="email"
                        placeholder="Почта"
                        name="email"
                        onChange={handleChange}

                    />
                    <input type="submit" value="СОХРАНИТЬ"/>
                    <input onClick={ ()=>{setShow(!show)}} type="button" value="ВЫЙТИ"/>
                </form>

            </div>
            }

            {/*<div className="form-place">*/}
            {/*    <form action="">*/}
            {/*        {inputs}*/}
            {/*        <input id="save" type="submit" value="СОХРАНИТЬ"/>*/}
            {/*        <input id="exit" type="button" value="ВЫЙТИ*/}
            {/*    "/>*/}
            {/*    </form>*/}

            {/*</div>*/}


        </div>
    );

};

export default Hall;