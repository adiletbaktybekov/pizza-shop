import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";


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
    return (
        <section id="contacts">
            <div className="container">
                <div className="text-black contacts">
                    <h1 className="contacts-title  flex justify-center">Контакты</h1>
                    <ul className="contacts-ul ">Наши номера:
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
                    <div className="form flex">
                        <div className="form2 ">
                            <form className=" flex flex-col">
                                <p className="form-desc  ">Опишите суть вопроса, ситуации</p>
                                <input type="text" className="form-text  " placeholder="Опишите суть вопроса, ситуации. . ."/>
                                   <button className="form-btn ">Отправить</button>
                            </form>
                          </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;