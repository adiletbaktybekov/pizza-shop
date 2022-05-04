import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import Admin from "./components/Admin";
import Basket from "./components/Basket";
import Sale from "./components/Sale";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Footer from "./components/Footer";
import SaleDetails from "./components/SaleDetails";
import {Modal} from "./components/Modals/Modal";
import "./components/Modals/contactsModal.css"
import {ContactsModal} from "./components/Modals/ContactsModal";


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
            <Modal/>
            <ContactsModal/>
            <Footer/>
        </div>
    );
}

export default App;
