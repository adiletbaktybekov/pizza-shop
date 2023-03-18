import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Pages/Menu/Menu";
import {Routes, Route} from "react-router-dom";
import Basket from "./components/Pages/Basket/Basket";
import Contacts from "./components/Pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About/About";
import Error from "./components/404Error/Error";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Menu/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
