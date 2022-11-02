import React from "react";
import  "./Offer.css"
import offer1 from "../../../../img/StartPageImg/offer1.png"
import offer2 from "../../../../img/StartPageImg/offer2.png"
import offer3 from "../../../../img/StartPageImg/offer3.png"
import offer4 from "../../../../img/StartPageImg/offer4.png"

const Reviews= ()=>{
    return(
        <div className="offer">

            <p className="offer--title"> Предложения</p>
            <div className="offer--items">
                <div className="offer--card">
                    <img className="offer--img" src={offer1} alt=""/>
                    <p className="offer--text">Свадьба</p>
                </div>
                <div className="offer--card">
                    <img className="offer--img" src={offer2} alt=""/>
                    <p className="offer--text">День рождения</p>
                </div>
                <div className="offer--card">
                    <img className="offer--img" src={offer3} alt=""/>
                    <p className="offer--text">Крестины</p>
                </div>
                <div className="offer--card">
                    <img className="offer--img" src={offer4} alt=""/>
                    <p className="offer--text">Корпоратив</p>
                </div>


            </div>
            <div className="offer--button">
                <p className="button--text"> СОЗДАТЬ СВОЁ</p>
            </div>
        </div>
    )

}

export default Reviews