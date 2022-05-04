import React, {useState} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
import {ContactsModal} from "./Modals/ContactsModal";
// import {Link} from "react-router-dom";

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: 45.421532, lng: -75.697189}}
        />
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map))
const Contacts = () => {
    const [ContactModalActive, ContactSetModalActive] = useState(true)
    return (
        <section id="contacts">
            <div className="container">
                <div className="contacts">
                    <h1 className="contacts-title pt-6 text-white flex justify-center">Контакты</h1>
                    <ul className="contacts-ul text-white">Наши номера:
                        <li className="contacts-li">+996 700 777 800</li>
                        <li className="contacts-li">+996 700 777 800</li>
                        <li className="contacts-li">+996 700 777 800</li>
                    </ul>
                    <div className="map">
                        <WrappedMap
                            googleMapURL=
                                {`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places`}
                            loadingElement={<div style={{height: `430px`}}/>}
                            containerElement={<div style={{height: `430px`}}/>}
                            mapElement={<div style={{height: `100%`}}/>}
                        />
                    </div>
                    <div className="form pt-12 flex">
                        <div className="form1">
                            <form className="">
                                <p className="form-desc text-white pt-5">Выберите город</p>
                                <select className='form-select'>
                                    <option>Бишкек</option>
                                    <option>Ош</option>
                                    <option>Талас</option>
                                    <option>Жалал-Абад</option>
                                    <option>Нарын</option>
                                    <option>Ыссык-Кол</option>
                                    <option>Чуй</option>
                                </select>
                                <p className="form-desc text-white pt-5">Тема</p>
                                <select className='form-select'>
                                    <option>Обслуживание клиентов</option>
                                    <option>Техническая поддержка</option>
                                    <option>Общая помощь</option>
                                    <option>Информация о франчайзинге</option>
                                </select>
                                <p className="form-desc text-white pt-10">Нажимая "Отправить", вы соглашаетесь с
                                    условиями обработки данных</p>
                            </form>
                        </div>
                        <div className="form2 ">
                            <form className=" flex flex-col">
                                <p className="form-desc text-white pt-5">Опишите суть вопроса, ситуации</p>
                                <input type="text" className="form-text p-4 pt-5" placeholder="Опишите суть вопроса, ситуации. . ."/>
                                   <button className="form-btn mt-5 text-white" onClick={() => ContactSetModalActive(true)}>Отправить</button>
                            </form>
                            <ContactsModal active={ContactModalActive} setActive={ContactSetModalActive}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;