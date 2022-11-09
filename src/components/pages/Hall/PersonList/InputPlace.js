import React from 'react';
import './InputPlace.css'

const InputPlace = (props) => {
    const name = "place" + props.value
    return (
        <div className="input-place">
            <label htmlFor={name}> {props.value} </label>
            <input type="text" placeholder={`Место №${props.value}`}/>
        </div>
    );
};

export default InputPlace;