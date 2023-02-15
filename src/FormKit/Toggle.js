import React from "react";

const Toggle = ({ setValue, value, prop, title, storge }) => {
    const onCheck = () => {
        let newVal = !value;
        // storge && localStorage.setItem(storge, newVal ? "1" : "0");
        setValue((_obj) => (_obj[prop] = newVal));
    };
    return (
        <div className={`Toggle-button ${value ? "Toggleed" : ""}`}>
            <p onClick={onCheck} className="Toggleed-bg shadow-lg">
                <span className="shadow-lg" />
            </p>
            <p className="font-bold carbonic flex-grow">{title}</p>
        </div>
    );
};

export default Toggle;
