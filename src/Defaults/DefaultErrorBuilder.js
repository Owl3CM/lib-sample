import React, { Fragment } from "react";
import DefaultItemBuilder from "./DefaultItemBuilder";

const DefaultErrorBuilder = ({ data }) => {
    return (
        <Fragment>
            <div className="col-center col-span-full">
                <p className="text-white text-center animate-bounce rounded-full font-bold bg-red-500" style={{ padding: "30px", opacity: 0.3 }}>
                    Error!
                </p>
            </div>
            <DefaultItemBuilder item={data.error} />
        </Fragment>
    );
};

export default DefaultErrorBuilder;
