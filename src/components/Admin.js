import React, {useState} from 'react';
import MealImg from '../assets/img/Image 2.svg';
import {AiOutlineUser} from "react-icons/ai";
import {Modal} from "./Modals/Modal";

const Admin = () => {

    // const [modalActive,setModalActive] = useState(true)
    return (
        <section id="admin">
            <div className="container">
                <div className="admin flex flex-row">
                    {/*<Modal active={modalActive} setActive={setModalActive}/>*/}
                    <div className="about my-20 flex justify-center">
                        <div className="about-cont flex flex-col">
                            <AiOutlineUser className="about-img  " style={{
                                width: "90px",
                                height: "90px",
                                color: "white",
                                borderRadius: "50%",
                                background: "#737373"
                            }}/>
                            <h1 className="about-name text-white ">Байастан Ашимов</h1>
                            <p className="about-p text-gray-300">Мой номер</p>
                            <input type="text" className="about-input text-white " placeholder="+996 222533735"/>
                            <p className="about-p text-gray-300">E-mail</p>
                            <input type="text" placeholder="ashimov@gmail.com" className="about-input text-white"/>
                        </div>
                    </div>
                    <div className="order flex flex-col">
                        <div className="history">
                            <h1 className="history-title text-white">
                                История заказов
                            </h1>
                            <p className="history-desc border-b border-gray-500">Редактировать заказ
                                можно в корзине</p>
                            <div className="history-meals flex flex-row">
                                <img src={MealImg} className="history-meals-img" alt=""/>
                                <div className="history-meals-texts flex flex-col">
                                    <h3 className="history-meals-texts ">пицца 1 шт</h3>
                                    <p className='history-meals-texts'>365с</p>
                                </div>
                            </div>
                        </div>
                        <div className="adress  ">
                            <h1 className="history-title text-white">Адрес доставки</h1>
                        </div>
                        <div className="buy">
                            <h1 className="history-title text-white">Оплата</h1>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
        ;
};

export default Admin;