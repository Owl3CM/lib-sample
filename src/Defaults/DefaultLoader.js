import React from "react";

const DefaultLoader = () => {
    return (
        <div style={{ height: "60vh" }}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default DefaultLoader;
