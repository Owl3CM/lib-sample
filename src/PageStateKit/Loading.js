import React from "react";

const Loading = ({ provider }) => {
    return (
        <div style={{ height: "60vh" }}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
