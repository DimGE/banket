import React from "react";
import "./WhyUs.css"
import geopoz from "../../img/geopozition.png"
import money from"../../img/money.png"
import man from "../../img/man.png"
import flame from "../../img/flame.png"

const WhyUs = () => {
    return (
        <div className="why">
            <h1 className="why--text">Почему именно мы:</h1>
            <div className="why--cards">

                <div className="card">
                    <img className="card--img" src={geopoz} alt=""/>
                    <p className="card--text">Удобное расположение</p>
                </div>

                <div className="card">
                    <img className="card--img" src={money} alt=""/>
                    <p className="card--text">Доступные цены</p>
                </div>

                <div className="card">
                    <img className="card--img" src={man} alt=""/>
                    <p className="card--text">Приятное обслуживание</p>
                </div>
                <div className="card">
                    <img className="card--img" src={flame} alt=""/>
                    <p className="card--text">Индивидуальный подход</p>
                </div>

                <div className="card">
                    <img className="card--img" src={flame} alt=""/>
                    <p className="card--text">Лучшие воспоминания</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs