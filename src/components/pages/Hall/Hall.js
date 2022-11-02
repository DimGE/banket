import React from 'react';
import "./Hall.css"
import Place from "./Place/Place";

const Hall = () => {
    const [table, setTable] = React.useState(createTb)
    function createTb() {
        const newArray = []
        const newArray1 = []
        const newArray2 = []
        const newArray3 = []
        const newArray4 = []
        const newArray5 = []
        for (let i = 1; i < 20; i++) {
            newArray1.push({
                id: i,
                value: i,
                isCheck: false
            })
        }
        for (let i = 20; i < 34; i++) {
            newArray2.push({
                id: i,
                value: i,
            })
        }
        for (let i = 34; i < 48; i++) {
            newArray3.push({
                id: i,
                value: i,
            })
        }
        for (let i = 48 ; i < 62; i++) {
            newArray4.push({
                id: i,
                value: i,
            })
        }
        for (let i = 62; i < 76; i++) {
            newArray5.push({
                id: i,
                value: i,
            })
        }
        newArray.push(newArray1)
        newArray.push(newArray2)
        newArray.push(newArray3)
        newArray.push(newArray4)
        newArray.push(newArray5)
        return newArray
    }

    function selectPlace(id){
        setTable(prevState => prevState.map((item,i)=>{

            })
        )
    }

    const places1 = table[0].map(place => <Place {...place} />)
    const places2 = table[1].map(place => <Place {...place} />)
    const places3 = table[2].map(place => <Place {...place} />)
    const places4 = table[3].map(place => <Place {...place} />)
    const places5 = table[4].map(place => <Place {...place} />)
    return (
        <div className="hall">

            <div className="hall-first">
                <div className="hall-table1">
                    {places1}
                    <div className="tb1">
                        Стол1
                    </div>
                </div>
            </div>

            <div className="hall-second">
                <div className="hall-table2">
                    <div className="tb2">
                        Стол2
                    </div>
                </div>
                <div className="hall-table3">
                    <Place value={43}/>
                    <div className="tb3">
                        Стол3
                    </div>
                </div>
            </div>

            <div className="hall-third">

                <div className="hall-table4">
                    <div className="tb4">
                        Стол4
                    </div>
                </div>
                <div className="hall-table5">
                    <div className="tb5">
                        Стол5
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hall;