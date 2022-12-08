import React from 'react';

const Guest = (props) => {
    const seat = props.seat ? props.seat : <i id="change_seat" onClick={props.change_seat} class="fa fa-refresh" aria-hidden="true"></i>
    return (
        <div className="guest">
            <p className="guest-item">{props.first_name}</p>
            <p>{props.last_name}</p>
            <p>{props.email}</p>
            <p className="guest-item">{seat}</p>
            <div ><i  onClick={props.leave_guest} id="leave" className="fa fa-sign-out" aria-hidden="true"></i></div>
            <div className="event_delete"><i onClick={props.delete_guest} id="delete" className="fa fa-trash" aria-hidden="true"></i></div>
        </div>
    );
};

export default Guest;