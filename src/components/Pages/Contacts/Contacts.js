import React from 'react';
import GoogleMapComponent from "./Map/GoogleMapComponent";

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
                </div>
            </div>
            <div style={{height: '100vh'}}>
                <GoogleMapComponent/>
            </div>
            <div className="container">
                <div className="form flex">
                    <div className="form2 ">
                        <form className=" flex flex-col">
                            <p className="form-desc  ">Опишите суть вопроса, ситуации</p>
                            <input type="text" className="form-text  "
                                   placeholder="Опишите суть вопроса, ситуации. . ."/>
                            <button className="form-btn ">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;