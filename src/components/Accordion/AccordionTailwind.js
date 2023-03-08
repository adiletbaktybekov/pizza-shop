import React, {useState} from 'react';

export const Accordion = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border rounded-lg overflow-hidden my-4 cursor-pointer">
            <div className={`bg px-4 py-3 ${isOpen?' bg-orange-500 text-white':''}`} onClick={toggleAccordion}>
                <div className="flex justify-between items-center">
                    <h2 className="">{title}</h2>
                    <div className={`transition-transform ${isOpen ? 'transform rotate-180' : ''}`}>
                        <svg className="w-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                    </div>
                </div>
            </div>
            {isOpen && <div className={`px-4 py-2 ${isOpen ? "ease-in-out" : ""}`}><h1>{children}</h1></div>}
        </div>
    );
};

export default Accordion;
