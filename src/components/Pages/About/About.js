import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {About1} from "../../../redux/action/About";


const About = () => {
    const about = useSelector(state => state.about)
    console.log(about, "about")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(About1())
    }, [])
    return (
        <section id="about">
            <div className="container">
                <div className="about">
                    <div className="">
                        {
                            about.map(el => (
                                <div className="" key={el.id}>
                                    <p>{el.text_1}</p>
                                </div>
                            ))
                        }
                        {/* <h2 className="text-3xl text-center text-white "> О нас</h2>*/}
                        {/*        <div className="grid grid-cols-2 gap-4 ">*/}
                        {/*        <div className="">*/}
                        {/*        <img src={} alt="" className=""/>*/}
                        {/*        </div>*/}
                        {/*        <div className="text-white " style={{width: "447px", height: "264px"}}>*/}
                        {/*        <p>Обычно люди приходят в Додо Пиццу, чтобы просто поесть. Наши промоутеры раздают*/}
                        {/*        листовки*/}
                        {/*        про*/}
                        {/*        кусочек пиццы или ещё что-то выгодное. Мы делаем это как первый шаг, чтобы*/}
                        {/*        познакомиться.*/}
                        {/*        </p>*/}
                        {/*        <p className="my-4"> Но для нас Додо — не только пицца. Это и пицца тоже, но в первую*/}
                        {/*        очередь*/}
                        {/*        это большое дело, которое вдохновляет нас, заставляет каждое утро просыпаться и с*/}
                        {/*        интересом*/}
                        {/*        продолжать работу.</p>*/}
                        {/*        </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="grid grid-cols-2 gap-4 ">*/}
                        {/*        <div className="text-white" style={{width: "447px", height: "264px"}}>*/}
                        {/*        <p>Обычно люди приходят в Додо Пиццу, чтобы просто поесть. Наши промоутеры раздают*/}
                        {/*        листовки*/}
                        {/*        про*/}
                        {/*        кусочек пиццы или ещё что-то выгодное. Мы делаем это как первый шаг, чтобы*/}
                        {/*        познакомиться.*/}
                        {/*        </p>*/}
                        {/*        <p className=""> Но для нас Додо — не только пицца. Это и пицца тоже, но в первую*/}
                        {/*        очередь*/}
                        {/*        это большое дело, которое вдохновляет нас, заставляет каждое утро просыпаться и с*/}
                        {/*        интересом*/}
                        {/*        продолжать работу.</p>*/}
                        {/*        </div>*/}
                        {/*        <div className="">*/}
                        {/*    /!*<img src={AboutMeal2} alt="" className=" absolute"/>*!/*/}
                        {/*        </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="flex justify-center ">*/}
                        {/*    /!*<img src={image} alt="" className="text-center"/>*!/*/}
                    </div>
                </div>
            </div>
</section>
);
};

export default About;