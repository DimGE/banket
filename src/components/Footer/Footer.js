import React from "react";
import "./Footer.css"
import footer from "../../img/StartPageImg/footer.png"
import map from "../../img/map.bmp"
import Map from "../Map";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--contacts">
                <div className="contacts--text">
                    <p>Адрес: бд. Дечебал 139</p>
                    <p>Тел: 022-37-88-97</p>
                    <p>e-mail: perfect.view@gmail.com</p>
                    <p>Часы работы: каждый день с 9:00 до 23:00</p>

                </div>
                <div className="contacts--img">
                    {/*<img src={map} alt=""/>*/}
                    {/*<iframe*/}
                    {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.6524043537165!2d28.85606595124467!3d46.98816153838385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97eabc3a765df%3A0x5414844e2adf07cc!2sVasconi%2C%20Magazin%20de%20haine%2C%20Decebal%20139!5e0!3m2!1sru!2s!4v1673882312619!5m2!1sru!2s"*/}
                    {/*    width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"*/}
                    {/*    referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
                    <Map
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
                        loadingElement={<div style={{height: `100%`}}/>}
                        containerElement={<div style={{height: `400px`}}/>}
                        mapElement={<div style={{height: `100%`}}/>}
                    />

                </div>

            </div>
            <div className="contacts--title">
                <p>© Ресторан Perfect view 2023</p>
            </div>
        </div>
    )
}

export default Footer