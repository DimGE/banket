import React from 'react';
import './User.css'

const Ivent = (props) => {
    return (
        <div className="ivent">

            <p>{props.name}</p>
            <p>{props.caunt}</p>
            <p>{props.data}</p>
            <p>{props.price}</p>
            <p>{props.state}</p>

  </div>
    );
};

export default Ivent;