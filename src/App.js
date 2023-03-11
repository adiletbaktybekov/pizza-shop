import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import Basket from "./components/Pages/Basket/Basket";
import Contacts from "./components/Pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About/About";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
