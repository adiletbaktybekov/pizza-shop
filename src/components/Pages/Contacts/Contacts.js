import React, {useEffect} from 'react';
import GoogleMapComponent from "./Map/GoogleMapComponent";
import {BsTelegram, BsWhatsapp} from "react-icons/bs";
import {IoMail} from "react-icons/io5";
import FormCall from "./Form";
import Accord from "../../Accordion/Accord";

const Contacts = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <section id="contacts" className="py-[150px]">
            <div className="container">
                <div className="text-black mb-5">
                    <h1 className="text-4xl mb-[20px] font-bold text-orange-500">Контакты</h1>
                    <div className="flex flex-row justify-between items-center flex-wrap ">
                        <div className="m-2">
                            <h1 className="text-2xl">График работы:</h1>
                            <p className="text-xl">10:00 - 22:00</p>
                        </div>
                    <div className='m-2'>
                        <h1 className="text-2xl font-normal">Наши номера:</h1>
                        <a href="tel:+7 968 882-92-92" className="text-xl">+7 968 882-92-92</a>
                    </div>
                    <div className="mx-2">
                        <h1 className="text-2xl">Вопросы, отзывы и предложения:</h1>
                        <a href="mailto:mysushiru@gmail.com" className="text-xl">mysushiru@gmail.com</a>
                    </div>
                    <div className="m-2">
                        <h1 className="text-2xl">Мы в соц сетях</h1>
                        <div className="flex text-[30px]">
                            <a href="https://wa.me/+79688829292" target="_blank">
                                <BsWhatsapp className=""/>
                            </a>
                            <a href="https://t.me/adilet_baktybekov" target="_blank" className="mx-3">
                                <BsTelegram className=""/>
                            </a>
                            <a href="mailto:mysushiru@gmail.com" target="_blank">
                                <IoMail className=""/>
                            </a>
                        </div>
                    </div>
                        <div>
                            <h1>Бесплатная доставка от 1500 руб. Оплата производится наличными, или картой курьеру при получении заказа.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height: '100vh'}}>
                <GoogleMapComponent/>
            </div>
            <div className="container">
                <div>
                    <FormCall/>
                </div>
             <Accord/>
            </div>
        </section>
    );
};

export default Contacts;