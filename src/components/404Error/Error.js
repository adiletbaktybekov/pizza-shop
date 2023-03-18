import React from 'react';
import error from '../../assets/img/404erroe.svg'
import {Link} from "react-router-dom";

const Error404 = () => {
    return (

        <div className="py-[150px] flex flex-col items-center justify-center">
            <img src={error} className="w-[50%] w" alt=""/>
            <h1 className="text-3xl my-3">Страница не найдена</h1>
            <Link to="/">
                <button className="text-white p-[10px] bg-orange-500 border-2 border-orange-500 rounded rounded-xl">
                    Вернуться в меню
                </button>
            </Link>
        </div>
    );
};

export default Error404;