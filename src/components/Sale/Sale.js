import React from 'react';
import pizza from "../../assets/img/meal52345.png"
import {Link, Route} from "react-router-dom";

const Sale = () => {
    return (
        <section id="sale">
            <div className="container">
                <h1 className="title text-white">Акции</h1>
                <div className="sale flex flex-wrap justify-center basis-2/3">
                    <div className="sale-items ">
                        <Link to="/sale/details"><img src={pizza} className="sale-items-img" alt=""/></Link>
                        <div className="sale-items-cont">
                            <h2 className="sale-items-cont-title  text-white">Новый раздел "Радости" с настольными
                                играми!</h2>
                            <p className="sale-items-cont-desc text-white">Настольные игры в новом разделе "Радости"*.
                                Скидки и акции по промо-кодам не распространяются на товары </p>
                        </div>
                    </div>
                    <div className="sale-items">
                        <Link to="/sale/details"><img src={pizza} className="sale-items-img" alt=""/></Link>
                        <div className="sale-items-cont">
                            <h2 className="sale-items-cont-title  text-white">Новый раздел "Радости" с настольными
                                играми!</h2>
                            <p className="sale-items-cont-desc text-white">Настольные игры в новом разделе "Радости"*.
                                Скидки и акции по промо-кодам не распространяются на товары </p>
                        </div>
                    </div>
                    <div className="sale-items ">
                        <Link to="/sale/details"><img src={pizza} className="sale-items-img" alt=""/></Link>
                        <div className="sale-items-cont">
                            <h2 className="sale-items-cont-title  text-white">Новый раздел "Радости" с настольными
                                играми!</h2>
                            <p className="sale-items-cont-desc text-white">Настольные игры в новом разделе "Радости"*.
                                Скидки и акции по промо-кодам не распространяются на товары </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sale;