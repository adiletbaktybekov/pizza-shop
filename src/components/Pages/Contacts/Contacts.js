import React from 'react';
import GoogleMapComponent from "./Map/GoogleMapComponent";
import {Link} from "react-router-dom";
import {BsInstagram, BsTelegram, BsWhatsapp} from "react-icons/bs";
import {IoMail} from "react-icons/io5";
import {Accordion} from "../../Accordion/AccordionTailwind";

const Contacts = () => {
    return (
        <section id="contacts" className="py-[150px]">
            <div className="container">
                <div className="text-black mb-5">
                    <h1 className="text-4xl mb-[20px] font-bold text-orange-500">Контакты</h1>
                    {/*<div className="flex flex-row justify-around flex-wrap ">*/}
                    <div>
                        <h1 className="text-2xl font-normal">Наши номера:</h1>
                        <a href="tel:+7 968 882-92-92" className="">+7 968 882-92-92</a>
                    </div>
                    <div className="my-[10px]">
                        <h1 className="text-2xl font-normal">Вопросы, отзывы и предложения:</h1>
                        <a href="mailto:mysushiru@gmail.com">mysushiru@gmail.com</a>
                    </div>
                    <div className="">
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
                <Accordion title="Почему мы?">
                    <p className="text-gray-700">Потому что мы лучшие</p>
                </Accordion>
                <Accordion title="Где находимся мы?">
                    <p className="text-gray-700">Москва</p>
                </Accordion>
            </div>
        </section>
    );
};

export default Contacts;