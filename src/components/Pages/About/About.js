import React from 'react';
import pizzaTeam from '../../../assets/img/sushi-roll-295089.svg'

const About = () => {
    return (
        <div className="about py-[150px]">
            <div className="container">
                <div className="about-first flex justify-between">
                    <div className="about-first-texts flex flex-col w-[60%]">
                        <span className="text-6xl font-bold text-orange-500">Мы</span>
                        <h1 className="my-[20px] text-xl">Команда пиццерии, которая стремится предоставить вам лучший опыт пиццы. Наша миссия -
                            обеспечить высочайшее качество продуктов, максимально быстрое обслуживание и уютную
                            атмосферу, которая будет делать вас чувствовать себя как дома.
                            Мы приглашаем вас посетить нашу пиццерию и попробовать наши пиццы. Мы уверены, что вы не
                            пожалеете о своем выборе!</h1>
                    </div>
                    <div>
                        <img src={pizzaTeam} className="about-first-img rounded-3xl mt-[100px] w-[100%]" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;