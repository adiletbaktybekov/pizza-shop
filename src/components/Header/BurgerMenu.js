import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {BsInfoLg, BsMoonStarsFill} from "react-icons/bs";
import {IoIosContact} from "react-icons/io";
import {FaPizzaSlice} from "react-icons/fa";

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
                    <div className="absolute top-0 right-0 px-8 py-8">
                        <svg onClick={() => setIsNavOpen(false)} className="h-16 w-16 text-orange-500"
                             viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </div>
                    <div className="mx-[100px]">
                        <div className="flex flex-col text-[35px]">
                            <div className=" flex flex-row items-center">
                                <FaPizzaSlice/>
                                <Link to="/"
                                      className="mx-4 inline-block flex flex-row justify-around items-center border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">
                                    Меню</Link>
                            </div>
                            <div className=" flex flex-row items-center">
                                <BsInfoLg/>
                                <Link to="/"
                                      className="mx-4 inline-block border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500">
                                    О нас</Link>
                            </div>
                            <div className=" flex flex-row  items-center">
                                <IoIosContact/>
                                <Link to="/contacts"
                                      className="mx-4 inline-block border-b-2 border-transparent  hover:text-orange-500 hover:border-orange-500">
                                    Контакты</Link>
                            </div>
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