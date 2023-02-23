import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {BsMoonStarsFill} from "react-icons/bs";

const BurgerMenu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div>
            <section className="MOBILE-MENU flex lg:hidden">
                <div className="HAMBURGER-ICON space-y-2 mt-[25px]"
                     onClick={() => setIsNavOpen((prev) => !prev)}>
                    <span className="block h-1 w-10 animate-pulse bg-gray-600"></span>
                    <span className="block h-1 w-10 animate-pulse bg-gray-600"></span>
                    <span className="block h-1 w-10 animate-pulse bg-gray-600"></span>
                </div>
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div className="absolute top-0 right-0 px-8 py-8"
                         onClick={() => setIsNavOpen(false)}>
                        <svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </div>
                    <div className="mt-[20px]">
                        <Link to="/"
                              className="header-nav-item font-bold mx-[20px] text-[16px] inline-block  border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">Меню</Link>
                        <Link to="/"
                              className="header-nav-item font-bold mx-[20px] text-[16px] inline-block  border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">Меню</Link>
                        <Link to="/"
                              className="header-nav-item font-bold mx-[20px] text-[16px] inline-block  border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500">Меню</Link>
                        <Link to="/contacts"
                              className="header-nav-item  mx-[20px] text-[16px] font-bold inline-block border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">Контакты</Link>
                    </div>
                    <div className="flex flex-col mt-[10px]">
                        <a href="tel:+380441234567" className="">+38 (044) 123-45-67</a>
                        <a href="tel:+380441234567" className="">+38 (044) 123-45-67</a>
                    </div>
                    <Link to="/" className="header-btn">
                        <BsMoonStarsFill style={{color: "#f97316"}}
                                         className="header-cart w-[30px] h-[30px] mt-[20px]"/>
                    </Link>
                </div>
            </section>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    );
};

export default BurgerMenu;