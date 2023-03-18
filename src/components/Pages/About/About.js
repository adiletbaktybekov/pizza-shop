import React, {useEffect} from 'react';
import pizzaTeam from '../../../assets/img/sushi-roll-295089.svg'
import pizzas from '../../../assets/img/pizzasImg.jpeg'
import FormCall from "../../Forms/Form";
import Accord from "../../Accordion/Accord";

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className="about py-[150px]">
            <div className="container">
                <div className="about-first flex justify-between">
                    <div className="about-first-texts flex flex-col w-[60%]">
                        <span className="text-6xl font-bold text-orange-500">Мы</span>
                        <h1 className="my-[20px] text-xl">команда ресторана, которая стремится предоставить вам лучший
                            опыт. Наша миссия - обеспечить высочайшее качество продуктов, максимально быстрое обслуживание и уютную
                            атмосферу, которая будет делать вас чувствовать себя как дома.
                            Мы приглашаем вас посетить наш ресторан и попробовать наши блюда. Мы уверены, что вы не
                            пожалеете о своем выборе!</h1>
                    </div>
                    <div>
                        <img src={pizzaTeam} className="about-first-img rounded-3xl mt-[100px] w-[100%]" alt=""/>
                    </div>
                </div>
                <h1 className="text-xl my-7">Мы вам предлагаем уютную и дружественную атмосферу, идеальную для семейного ужина, встречи с друзьями или
                    романтического ужина вдвоем. Мы также предлагаем услугу доставки, чтобы вы могли насладиться
                    нашими блюдами у себя дома.</h1>
                <div className="about-first flex justify-between">
                    <div className="w-[200%]">
                        <img src={pizzas} className="about-first-img rounded-3xl mt-[100px]" alt=""/>
                    </div>
                    <div className="about-second-text flex flex-col ml-[100px]">
                        {/*<span className="text-6xl font-bold text-orange-500">История</span>*/}
                        <h1 className=" my-[20px] text-xl">С самого начала мы стремимся к тому, чтобы наши гости
                            чувствовали себя как дома. Мы предлагаем не только вкусную еду, но и уютный интерьер,
                            дружелюбный сервис и теплую атмосферу. Мы гордимся тем, что наш ресторан стал любимым
                            местом для многих людей, и мы будем продолжать работать над тем, чтобы удивлять и радовать
                            наших гостей каждый день.</h1>
                        <h1 className=" my-[20px] text-xl">Мы верим, что хорошая еда - это не только вкусно, но и
                            здорово. Поэтому мы используем только свежие и качественные ингредиенты, не содержащие
                            консервантов и искусственных добавок.
                            Мы также гордимся тем, что мы делаем все возможное. Спасибо, что выбрали нас, и мы надеемся
                            увидеть вас скоро!</h1>
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