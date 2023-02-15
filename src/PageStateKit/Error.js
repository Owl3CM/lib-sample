import React from "react";
import { JsonBuilder } from "../NodeBuilder/JsonParser";

const Error = ({ provider }) => {
    const error = provider.state.error;
    return (
        <div
            onClick={({ target }) => {
                provider.fetch();
            }}
            className="fixed bg-blur inset-0 justify-center col z-50 blur-bg overflow-auto">
            <div className="col-center">
                <JsonBuilder item={error.stack ? { message: error.message, stack: error.stack } : error} />
                <p className="text-white text-center animate-bounce rounded-full font-bold bg-red-500" style={{ padding: "40px 35px", opacity: 0.3 }}>
                    Error!
                </p>
                {/* <DefaultItemBuilder item={error.stack ? { message: error.message, stack: error.stack } : error} /> */}
            </div>
        </div>
    );
};

export default Error;
