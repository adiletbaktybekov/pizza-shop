import React from 'react';
import Accordion from "./AccordionTailwind";
import {Link} from "react-router-dom";

const Accord = () => {
    return (
        <div>
            <h1 className="text-xl mt-7">Часто задаваемые вопросы:</h1>
            <Accordion title="Почему мы?">
                <p className="text-gray-700">Мы уделяем большое внимание деталям и всегда стараемся превзойти ожидания наших клиентов.</p>
            </Accordion>
            <Accordion title="Где находимся мы?">
                <p className="text-gray-700">Мы находимся в городе Москва, Кузмынское метро, ул. Волгоградский, 177 <a href="https://www.google.com/maps/place/MY+Sushi/@55.701692,37.795568,17z/data=!4m6!3m5!1s0x414ab5944808dc93:0xf70cee9a4e35e717!8m2!3d55.701906!4d37.795714!16s%2Fg%2F11r9vmc9_g" target="_blank" className="text-blue-400">Можете посмотреть здесь</a></p>
            </Accordion>
            <Accordion title="У нас есть доставка ?">
                <p className="text-gray-700">Конечно, у нас есть доставка, а также бесплатная доставка от 1500 руб. Оплата производится наличными, или картой курьеру при получении заказа.</p>
            </Accordion>
        </div>
    );
};

export default Accord;