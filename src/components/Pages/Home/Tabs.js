import React from 'react';
import {Link} from "react-router-dom";

const Tabs = () => {
    return (
        <div>
            <div className="mt-[80px]">
                <div className="flex flex-row justify-center flex-wrap">
                    <Link to="sushi">
                        <h1 className="text-xl mx-3">
                            Классические роллы
                        </h1>
                    </Link>
                    <Link to="sushi">
                        <h1 className="text-xl mx-3">
                            Запеченные роллы
                        </h1>
                    </Link>
                    <Link to="sushi">
                        <h1 className="text-xl mx-3">
                            Холодные роллы
                        </h1>
                    </Link>
                    <Link to="sushi">
                        <h1 className="text-xl mx-3">
                            Пиццы
                        </h1>
                    </Link>
                    <Link to="sushi">
                        <h1 className="text-xl mx-3">
                            Суши
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tabs;