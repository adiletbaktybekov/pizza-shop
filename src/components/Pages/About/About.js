import React from 'react';
import pizzaTeam from '../../../assets/img/sushi-roll-295089.svg'
import pizzas from '../../../assets/img/pizzasImg.jpeg'
import FormCall from "../Contacts/Form";
import Accord from "../../Accordion/Accord";

const About = () => {
    return (
        <div className="about py-[150px]">
            <div className="container">
                <div className="about-first flex justify-between">
                    <div className="about-first-texts flex flex-col w-[60%]">
                        <span className="text-6xl font-bold text-orange-500">Мы</span>
                        <h1 className="my-[20px] text-xl">Команда пиццерии, которая стремится предоставить вам лучший
                            опыт пиццы. Наша миссия -
                            обеспечить высочайшее качество продуктов, максимально быстрое обслуживание и уютную
                            атмосферу, которая будет делать вас чувствовать себя как дома.
                            Мы приглашаем вас посетить нашу пиццерию и попробовать наши пиццы. Мы уверены, что вы не
                            пожалеете о своем выборе!</h1>
                    </div>
                    <div>
                        <img src={pizzaTeam} className="about-first-img rounded-3xl mt-[100px] w-[100%]" alt=""/>
                    </div>
                </div>
                <h1 className="text-xl my-7">Мы приглашаем вас посетить нашу пиццерию и попробовать наши блюда. Мы предлагаем уютную и дружественную атмосферу, идеальную для семейного ужина, встречи с друзьями или романтического ужина вдвоем. Мы также предлагаем услугу доставки пиццы, чтобы вы могли насладиться нашими блюдами у себя дома.</h1>
                <div className="about-first flex justify-between">
                    <div className="w-[130%]">
                        <img src={pizzas} className="about-first-img rounded-3xl mt-[100px]" alt=""/>
                    </div>
                    <div className="about-second-text flex flex-col ml-[100px]">
                        {/*<span className="text-6xl font-bold text-orange-500">История</span>*/}
                        <h1 className=" my-[20px] text-xl">Мы верим, что хорошая пицца - это не только вкусно, но и здорово. Поэтому мы используем только свежие и качественные ингредиенты, не содержащие консервантов и искусственных добавок. Мы также стремимся к устойчивости и заботимся о окружающей среде, используя упаковку и материалы, которые можно переработать и снижая наш экологический след.

                            Мы также гордимся тем, что мы делаем все возможное, чтобы поддерживать местные сообщества и организации. Мы поддерживаем благотворительные акции и мероприятия, а также работаем с местными поставщиками, чтобы поддерживать местную экономику.

                            Мы надеемся, что вы сможете насладиться нашей вкусной едой, уютной атмосферой и дружелюбным сервисом в нашей пиццерии. Спасибо, что выбрали нас, и мы надеемся увидеть вас скоро!</h1>
                    </div>

                </div>
                <div className="my-[50px]">
                    <FormCall/>
                </div>
                <div>
                    <Accord/>
                </div>
            </div>
        </div>
    );
};

export default About;