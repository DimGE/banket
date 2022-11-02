import React from "react";
import "./Footer.css"
import footer from "../../img/StartPageImg/footer.png"
import map from "../../img/map.png"

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer--contacts">
                <div className="contacts--text">
                    <p>Адрес: Ул. Куза Вода 39</p>
                    <p>Тел: 022-37-88-97</p>
                    <p>e-mail: pushka@gmail.com</p>
                    <p>Часы работы: каждый день с 9:00 до 23:00</p>

                </div>
                <div className="contacts--img">
                    <img src={map} alt=""/>
                </div>

            </div>
            <div className="contacts--title">
                <p>© Ресторан Pushka 2022</p>
            </div>
        </div>
    )
}

export default Footer