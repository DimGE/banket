import React from "react";

import Header from "./Header/Header";
import About from "./About/About";
import WhyUs from "./WhyUs/WhyUs";
import Reviews from "./Reviews/Reviews";
import Offer from "./Offer/Offer";


const StartPage = (props) => {
    return (
        <div className="startpage">
            <Header/>
            <About/>
            <WhyUs/>
            {/*<Reviews/>*/}
            <Offer auth={props.auth}/>
        </div>
    )
}
export default StartPage