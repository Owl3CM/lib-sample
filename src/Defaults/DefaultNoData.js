import React from "react";

const DefaultNoData = ({ provider }) => {
    return (
        <div className="col-center  col-span-full">
            <p className="text-white text-center animate-bounce rounded-full font-bold bg-cyan-600" style={{ padding: "18px" }}>
                ! No Data
            </p>
        </div>
    );
};

export default DefaultNoData;
