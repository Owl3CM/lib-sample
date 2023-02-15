import React from "react";

const Progressing = ({ provider }) => {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 col-center z-50" style={{ backgroundColor: "#63cfc955" }}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Progressing;
