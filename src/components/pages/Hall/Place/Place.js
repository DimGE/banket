import React from 'react';
import './Place.css'

const Place = (props) => {
    const clasName=`place n${props.value}`
    return (
        <div className={clasName} id={props.value}>
            <p className="place-num">{props.value}</p>
        </div>
    );
};

export default Place;