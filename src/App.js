import './App.css';
import StartPage from "./components/pages/Startpage/StartPage";
import SignUp from "./components/pages/SignUp/SignUp";
import LogIn from "./components/pages/LogIn/LogIn";
import Footer from "./components/Footer/Footer";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hall from "./components/pages/Hall/Hall";

function App() {
    return (
        <BrowserRouter >
            <div className="App">
                <Navbar/>
                {/*<SignUp/>*/}
                {/*<StartPage/>*/}
                <Routes path="" element={<StartPage/>}>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/startpage" element={<StartPage/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="/hall" element={<Hall/>}/>
                    {/*<SignUp/>*/}
                    {/*<LogIn/>*/}
                    {/*<Footer/>*/}
                </Routes>
                {/*<Hall/>*/}

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
