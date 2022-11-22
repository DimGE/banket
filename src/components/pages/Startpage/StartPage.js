import React from "react";
import Navbar from "../../Navbar/Navbar";
import Header from "./Header/Header";
import About from "./About/About";
import WhyUs from "./WhyUs/WhyUs";
import Reviews from "./Reviews/Reviews";
import Offer from "./Offer/Offer";
import Footer from "../../Footer/Footer";

const StartPage = (props) =>{
    console.log(props.auth)
    return(
        <div className="startpage">
            {/*<Navbar/>*/}
            <Header/>
            <About/>
            <WhyUs/>
            <Reviews/>
            <Offer auth={props.auth}/>
            {/*<Footer/>*/}
        </div>
    )
}
export default StartPage