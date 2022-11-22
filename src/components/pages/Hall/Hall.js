import React, {useEffect} from 'react';
import "./Hall.css"
import Place from "./Place/Place";
import InputPlace from "./PersonList/InputPlace";
import {useNavigate} from "react-router-dom";

const Hall = (props) => {
    console.log(props.auth)
    const [table, setTable] = React.useState(create_places)
    const navigate = useNavigate()
    // function createTb() {
    //     const newArray = []
    //     const newArray1 = []
    //     const newArray2 = []
    //     const newArray3 = []
    //     const newArray4 = []
    //     const newArray5 = []
    //     for (let i = 1; i < 20; i++) {
    //         newArray1.push({
    //             id: i,
    //             value: i,
    //             isCheck: false
    //         })
    //     }
    //     for (let i = 20; i < 34; i++) {
    //         newArray2.push({
    //             id: i,
    //             value: i,
    //         })
    //     }
    //     for (let i = 34; i < 48; i++) {
    //         newArray3.push({
    //             id: i,
    //             value: i,
    //         })
    //     }
    //     for (let i = 48; i < 62; i++) {
    //         newArray4.push({
    //             id: i,
    //             value: i,
    //         })
    //     }
    //     for (let i = 62; i < 76; i++) {
    //         newArray5.push({
    //             id: i,
    //             value: i,
    //         })
    //     }
    //     newArray.push(newArray1)
    //     newArray.push(newArray2)
    //     newArray.push(newArray3)
    //     newArray.push(newArray4)
    //     newArray.push(newArray5)
    //     return newArray
    // }

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



    const inputs = table.map(el => <InputPlace {...el}/>)

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
        setTable(prevState => prevState.map((place) => {
                return place.id === id ?
                    {...place, isCheck: !place.isCheck} :
                    place
            })
        )
    }

   useEffect(()=>{
   if(!props.auth){
       navigate('/startpage')
   }
   },[props.auth])

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

                <div className="form-place">
                    <form action="">
                        {inputs}
                        <input id="save" type="submit" value="СОХРАНИТЬ"/>
                        <input id="exit" type="button" value="ВЫЙТИ
                    "/>
                    </form>

                </div>


            </div>
        );

};

export default Hall;