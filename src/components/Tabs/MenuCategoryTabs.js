import React from 'react';
import {Link} from "react-router-dom";

const MenuCategoryTabs = () => {
    return (
        <div>
            <div className="mt-[80px]">
                <div className="flex flex-row justify-center flex-wrap">
                    <ul>
                        <li className='mx-2 text-xl inline-block  border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500'>
                            <Link to="/">
                                Пиццы
                            </Link>
                        </li>
                        <li className='mx-2 text-xl inline-block  border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500'>
                            <Link to="foods">
                               Роллы
                            </Link>
                        </li>
                        <li className='mx-2 text-xl inline-block  border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500'>
                            <Link to="drinks">
                                Напитки
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuCategoryTabs;