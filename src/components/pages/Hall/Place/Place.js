import React from 'react';
import './Place.css'

const Place = (props) => {
    const styles = {
        backgroundColor: props.isCheck ? "green" : "#265D6E",
    }
    const clasName=`place n${props.value}`
    return (
        <div style={styles}
             className={clasName}
             id={props.value}
             onClick={props.selectPlace}
        >
            <p className="place-num">{props.value}</p>
        </div>
    );
};

export default Place;