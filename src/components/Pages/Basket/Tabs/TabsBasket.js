import React, { useState } from "react";

const Tab = ({ activeTab, label, onClick }) => {
    const isActive = activeTab === label;

    return (
        <div
            className={`cursor-pointer p-[10px] rounded  ${isActive ? "bg-orange-500 text-white" : ""}`}
            onClick={() => onClick(label)}
        >
            {label}
        </div>
    );
};

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const onClickTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="p-[20px]">
            <div className="flex justify-center">
                {children.map((child) => {
                    const { label } = child.props;
                    return (
                        <Tab
                            key={label}
                            activeTab={activeTab}
                            label={label}
                            onClick={onClickTab}
                        />
                    );
                })}
            </div>
            <div className="">
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    );
};

export default Tabs;
