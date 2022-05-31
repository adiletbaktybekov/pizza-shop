import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {Routes, Route} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Basket from "./components/Basket/Basket";
import Sale from "./components/Sale/Sale";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import SaleDetails from "./components/Sale-details/SaleDetails";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/*"} element={<Home/>}/>
                <Route path="/admin*" element={<Admin/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/sale" element={<Sale/>}/>
                <Route path="/sale/details" element={<SaleDetails/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
