import React from "react";
import "./Footer.css"
import footer from "../../img/StartPageImg/footer.png"
// import map from "../../img/map.bmp"


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
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad8331bf7614fd7d58dcecd06b337e322d1c3f0f2f450777766ba9e2f9c155f27&amp;source=constructor"
                        width="600" height="350" frameBorder="0"></iframe>
                </div>

            </div>
            <div className="contacts--title">
                <p>© Ресторан Perfect view 2023</p>
            </div>
        </div>
    )
}

export default Footer