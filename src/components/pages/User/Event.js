import React from 'react';
import './User.css'

const Event = (props) => {

    let time = new Date(); // get your number
    let date = new Date(time); // create Date object
    const event_data = new Date(props.data)
    return (
        <div className="ivent">

            {
                !props.data || date <= event_data ?
                    <div className="event_edit">
                        <i
                            onClick={props.choise_event}
                            id="edit" className="fa fa-pencil-square-o"
                            aria-hidden="true">

                        </i>
                    </div> :
                    <div className="event_edit">
                        <i
                            onClick={()=>{alert("Мероприятие уже завершено")}}
                            id="edit" className="fa fa-pencil-square-o"
                            aria-hidden="true">

                        </i>
                    </div>

            }
            <p>{props.name}</p>
            <p>{props.caunt}</p>
            <p>{props.data}</p>
            <p>{props.price}</p>

            {
                props.data ?
                date <= event_data  ? <p> В процессе</p> : <p> Завершено </p> :
                <p>Дата не указана</p>
            }
           <div className="event_delete"><i onClick={props.delete_event} id="delete" className="fa fa-trash" aria-hidden="true"></i></div>

  </div>
    );
};

export default Event;