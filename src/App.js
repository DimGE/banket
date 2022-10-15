import './App.css';
import StartPage from "./components/Startpage/StartPage";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import Footer from "./components/Startpage/Footer/Footer";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./components/Startpage/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter >
            <div className="App">
                <Navbar/>
                {/*<StartPage/>*/}
                <Routes path="" element={<StartPage/>}>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/startpage" element={<StartPage/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<LogIn/>}/>
                    {/*<SignUp/>*/}
                    {/*<LogIn/>*/}
                    {/*<Footer/>*/}
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
