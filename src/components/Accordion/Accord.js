import React from 'react';
import Accordion from "./AccordionTailwind";

const Accord = () => {
    return (
        <div>
            <h1 className="text-xl mt-7">Часто задаваемые вопросы:</h1>
            <Accordion title="Почему мы?">
                <p className="text-gray-700">Мы предлагаем широкий ассортимент пиццы с различными топпингами и начинками, чтобы каждый клиент мог выбрать что-то на свой вкус.</p>
            </Accordion>
            <Accordion title="Где находимся мы?">
                <p className="text-gray-700">Мы находимся в городе Москва, Кузмынской метро, ул. Волгоградский, 177</p>
            </Accordion>
            <Accordion title="Доставка есть?">
                <p className="text-gray-700">Да, Мы предлагаем доставку пиццы на дом или в офис, чтобы наши клиенты могли наслаждаться нашей вкусной пиццей в любом удобном месте.</p>
            </Accordion>
        </div>
    );
};

export default Accord;