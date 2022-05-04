import React from 'react';

import Logo from '../assets/img/image 55.png'

const Footer = () => {
    return (
        <section id="footer">
            <div className="container  text-white">
                <div className="grid grid-cols-5 gap-4">
                    <img src={Logo} alt=""/>
                    <div>
                        <p className="text-2xl">Быстрые ссылки </p>
                        <p className="">Акции </p>
                        <p className="">График работы</p>
                        <p>Контакты</p>
                    </div>
                    <div>
                        <p className=" text-2xl">Адрес</p>
                        <p className="">Турусбекова 109/3</p>
                    </div>
                    <div className="text-2xl">
                        <p>Соц сети</p>
                        <div className="">

                        </div>
                    </div>
                    <div>
                        <p className="text-2xl">Принимаем к оплате</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;