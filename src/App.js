import './App.css';
import StartPage from "./components/pages/Startpage/StartPage";
import SignUp from "./components/pages/SignUp/SignUp";
import LogIn from "./components/pages/LogIn/LogIn";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hall from "./components/pages/Hall/Hall";
import MyIP from "./MyIP";
import myIP from "./MyIP";
import axios from "axios";

import {useState, useEffect} from "react";

function App() {

    const [auth, setAuth] = useState(!!localStorage.getItem('accessToken'))
    const [token, setToken] = useState({
        access: "",
        refresh: ""
    })

    useEffect(() => {
        setToken(prevToken => {
                return (

                    localStorage.getItem('accessToken') ?
                        {
                            ...prevToken,
                            access: JSON.parse(localStorage.getItem('accessToken')),
                            refresh: JSON.parse(localStorage.getItem('refreshToken'))
                        } :
                        prevToken

                )
            }
        )
    }, [])

    useEffect(() => {
        setInterval(() => {
            if (localStorage.getItem('refreshToken')) {
                axios.post(`${myIP}/users/token/refresh/`, {
                    "refresh": JSON.parse(localStorage.getItem('refreshToken'))
                })
                    .then(res => {
                        localStorage.setItem('accessToken', JSON.stringify(res.data.access))
                    })
            }
        }, 240000)
    })

    const removeUser = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setAuth(!auth)
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar auth={auth} removeUser={() => {
                    removeUser()
                }}/>
                {/*{dis}*/}
                {/*<SignUp/>*/}
                {/*<StartPage/>*/}
                <Routes path="" element={<StartPage auth={auth}/>}>
                    <Route path="/" element={<StartPage auth={auth}/>}/>
                    <Route path="/startpage" element={<StartPage auth={auth}/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<LogIn auth={() => {
                        setAuth(!auth)
                    }}/>}/>
                    <Route path="/hall" element={<Hall auth={auth}/>}/>
                    {/*<SignUp/>*/}
                    {/*<LogIn/>*/}
                    {/*<Footer/>*/}
                </Routes>
                {/*<Hall/>*/}

                <Footer/>
                {myIP}
            </div>
        </BrowserRouter>
    );
}

export default App;
