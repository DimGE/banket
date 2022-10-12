import React from "react";
import "./Reviews.css"
import star from "../../img/star.png"

const Reviews= ()=>{
    return(
        <div className="reviews">
            <p className="reviews--title"> Отзывы</p>
            <div className="reviews--items">
                <div className="reviews--card">
                    <p className="card--name"><span>Имя</span>,число</p>
                    <div className="card--stars">
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                    </div>
                    <p className="card--reviews">Имя, число мне все очень понравилось) Самое лучшее место на свете</p>
                </div>

                <div className="reviews--card">
                    <p className="card--name"><span>Имя</span>,число</p>
                    <div className="card--stars">
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                    </div>
                    <p className="card--reviews">Имя, число мне все очень понравилось) Самое лучшее место на свете</p>
                </div>


                <div className="reviews--card">
                    <p className="card--name"><span>Имя</span>,число</p>
                    <div className="card--stars">
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                    </div>
                    <p className="card--reviews">Имя, число мне все очень понравилось) Самое лучшее место на свете</p>
                </div>


                <div className="reviews--card">
                    <p className="card--name"><span>Имя</span>,число</p>
                    <div className="card--stars">
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                    </div>
                    <p className="card--reviews">Имя, число мне все очень понравилось) Самое лучшее место на свете</p>
                </div>



            </div>
            <div className="reviews--button">
                <p className="button--text"> СМОТРЕТЬ ВСЕ</p>
            </div>
        </div>
    )

}

export default Reviews