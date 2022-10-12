import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import WhyUs from "./components/WhyUs/WhyUs";
import Reviews from "./components/Reviews/Reviews";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <WhyUs/>
      <Reviews/>
      <Offer/>
      <Footer/>
      </div>
  );
}

export default App;
