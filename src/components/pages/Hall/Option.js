import React from 'react';

const Option = (props) => {
    const styles = {
        boxShadow: "rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, red 0 -3px 0 inset",
        backgroundColor:"red"
    }
    const button = !props.isChecked ?
        <div className="button-select" role="button" onClick={props.addOption}>Выбрать</div> :
        <div className="button-select" style={styles} role="button" onClick={props.removeOption}>Убрать</div>
    return (
        <div className="option">
                <p>{props.name}</p>
                <p>{props.description}</p>
                <p>{props.price}</p>
                {button}
        </div>
    );
};

export default Option;