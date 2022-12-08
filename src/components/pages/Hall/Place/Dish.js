import React from 'react';

const Dish = (props) => {
    return (
        <div className="dish">
            <p>{props.dish.name}</p>
            <p>{props.dish.description}</p>
            <p>{props.amount}</p>
            <p>{props.dish.price * props.amount}</p>
            <div className="event_delete"><i onClick={props.delete_order} id="delete" className="fa fa-trash" aria-hidden="true"></i></div>
        </div>
    );
};

export default Dish;