import React from 'react';
import './User.css'

const Event = (props) => {
    return (
        <div className="ivent">
            <p>{props.name}</p>
            <p>{props.caunt}</p>
            <p>{props.data}</p>
            <p>{props.price}</p>
            {
                !props.state ? <p> В процессе</p> : <p> Завершено </p>
            }
           <div className="event_delete"><i onClick={props.delete_event} id="delete" className="fa fa-trash" aria-hidden="true"></i></div>

  </div>
    );
};

export default Event;