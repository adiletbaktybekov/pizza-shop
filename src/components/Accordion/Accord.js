import React from 'react';
import Accordion from "./AccordionTailwind";

const Accord = () => {
    return (
        <div>
            <h1 className="text-xl mt-7">Часто задаваемые вопросы:</h1>
            <Accordion title="Почему мы?">
                <p className="text-gray-700">Потому что мы лучшие</p>
            </Accordion>
            <Accordion title="Где находимся мы?">
                <p className="text-gray-700">Москва</p>
            </Accordion>
        </div>
    );
};

export default Accord;