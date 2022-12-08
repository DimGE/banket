import React from 'react';
import './Place.css'

const Place = (props) => {
    const styles = {
        backgroundColor: props.is_engaged ? "red" : "#265D6E",
        color: props.is_engaged ? "black" : "white",
    }
    const clasName=`place n${props.number}`
    return (
        <div style={styles}
             className={clasName}
             id={props.number}
             onClick={props.selectPlace}
        >
            <p className="place-num">{props.number}</p>
        </div>
    );
};

export default Place;