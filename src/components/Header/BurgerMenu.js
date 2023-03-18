import React, {useState} from 'react';
import {Link} from "react-router-dom";

const BurgerMenu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <section className="MOBILE-MENU flex lg:hidden">
            <div className="HAMBURGER-ICON space-y-2 mt-[25px]"
                 onClick={() => setIsNavOpen((prev) => !prev)}>
                <span className="block h-1 w-10 bg-orange-500"></span>
                <span className="block h-1 w-10 bg-orange-500"></span>
                <span className="block h-1 w-10 bg-orange-500"></span>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div className="absolute top-0 left-0 px-8 py-8">
                    <svg onClick={() => setIsNavOpen(false)} className="h-14 w-14 text-orange-500"
                         viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </div>
                <div className="">
                    <div className="flex flex-col justify-center text-[35px] mt-[100px]">
                        <div
                            className="border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">
                            <Link onClick={() => setIsNavOpen(false)} to="/" className="mx-4 ">
                                Меню</Link>
                        </div>
                        <div
                            className="border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">
                            <Link onClick={() => setIsNavOpen(false)} to="/about" className="mx-4">
                                О нас</Link>
                        </div>
                        <div
                            className="border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">
                            <Link onClick={() => setIsNavOpen(false)} to="/contacts" className="mx-4 ">
                                Контакты</Link>
                        </div>
                    </div>
                    <div className="mt-[100px]">
                        <h1 className="">Звоните по номеру телефона:</h1>
                        <p className="mt-1 mb-4">
                            <a href="tel:+7 968 882-92-92">+7 968 882-92-92</a>
                        </p>
                     </div>
                </div>

            </div>
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
        z-index: 200;
        display: flex;
    justify-content: space-evenly  ;
       
        align-items: center;
      }
    `}</style>
        </section>
    );
};

export default BurgerMenu;