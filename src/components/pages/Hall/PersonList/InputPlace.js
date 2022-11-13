import React from 'react';
import './InputPlace.css'

const InputPlace = (props) => {
    const name = "place" + props.value
    const styles = {
        marginTop: "5px",
        paddingLeft: "30px",
        border: "none",
        width: "150px",
        height: "25px",
        fontSize: "20px",
        borderRadius: "4px",
    }
    return (
        <div className="input-place">
            <label htmlFor={name}> {props.value} </label>
            <input style={styles} id="pc" type="text" placeholder={`Место №${props.value}`}/>
        </div>
    );
};

export default InputPlace;