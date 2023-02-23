import React from 'react';
import {Link} from "react-router-dom";

const Tabs = () => {
    return (
        <div>
            <div className="mt-[80px]">
                <ul className="tabs-ul flex justify-center flex-wrap">
                    <Link to="">
                        <li className="text-white mx-2 flex flex-row items-center my-2 hover:bg-orange-500 hover:text-white bg-[#f4eade] border-2 text-orange-500 border-orange-500 rounded rounded-2xl p-[5px]">
                            <h1 className="ml-2 mr-2 text-xl">
                                Суши
                            </h1>
                        </li>
                    </Link>
                    <Link to="sushi">
                        <li className="text-white mx-2 flex flex-row items-center my-2 hover:bg-orange-500 hover:text-white bg-[#f4eade] border-2 text-orange-500 border-orange-500 rounded rounded-2xl  p-[5px]">
                            <h1 className="ml-2 mr-2 text-xl">
                                Пиццы
                            </h1>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Tabs;