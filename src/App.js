import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import Basket from "./components/Pages/Basket/Basket";
import Sale from "./components/Pages/Sale/Sale";
import Contacts from "./components/Pages/Contacts/Contacts";
import About from "./components/Pages/About/About";
import Footer from "./components/Footer/Footer";
import SaleDetails from "./components/Pages/Sale-details/SaleDetails";
import PizzaCard from "./components/meals-cards/PizzaCard";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/*"} element={<Home/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/sale" element={<Sale/>}/>
                <Route path="/sale/details" element={<SaleDetails/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            {/*<PizzaCard/>*/}
            <Footer/>
        </div>
    );
}

export default App;
