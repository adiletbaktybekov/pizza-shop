import React from 'react';

import Logo from '../assets/img/image 55.png'
const Footer = () => {
    return (
       <section id="footer">
            <div className="container py-16 text-white">
                <div className="grid grid-cols-5 gap-4">
                    <img src={Logo} alt=""/>
                    <div>
                        <p className="text-2xl">Быстрые ссылки </p>
                        <p className="my-5">Акции </p>
                        <p className="my-5">График работы</p>
                        <p >Контакты</p>
                    </div>
                    <div>
                        <p className=" text-2xl">Адрес</p>
                        <p className="my-5">Турусбекова 109/3</p>
                    </div>
                    <div className="text-2xl">
                        <p>Соц сети</p>
                        <div className="my-5">
                            {/*<a href="" className="mr-2"><i className="fa fa-facebook"></i></a>*/}
                 sdcfjmdckfmk           {/*<a href="" className="mr-2"><i className="fa fa-whatsapp"></i></a>*/}
                            {/*<a href="" className="mr-2"><i className="fa fa-telegram"></i></a>*/}
                            {/*<a href="" ><i className="fa fa-instagram"></i></a>*/}
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl">Принимаем к оплате</p>
                        {/*<img className="my-5 " src={mir} alt=""/>*/}
                    </div>
                </div>

            </div>
       </section>
    );
};

export default Footer;