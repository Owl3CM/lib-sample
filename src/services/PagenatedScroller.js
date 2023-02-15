import React from "react";
// import PageStateKit from "../PageStateKit/PageStateKit";
// import ServiceStateBuilder from "../PageStateKit/ServiceStateBuilder";

const PagenatedScroller = ({ service, children }) => {
    return (
        <div
            onScroll={({ target }) => {
                if (service.canFetch && target.scrollHeight - target.scrollTop < target.clientHeight + 400) {
                    service.canFetch = false;
                    service.fetch();
                }
            }}
            className="wrapper scroller">
            {/* <TestProvider provider={service} /> */}
            {children}
            {/* <ServiceStateBuilder service={service} /> */}
        </div>
    );
};

export default React.memo(PagenatedScroller);

const TestProvider = ({ provider }) => {
    return (
        <>
            <div className="row gap-2xl">
                {Object.keys(PageStateKit).map((stateName, i) => (
                    <p
                        onClick={() => {
                            provider.setState(stateName);
                        }}
                        key={i}
                        className="button">
                        {stateName}
                    </p>
                ))}
            </div>

            <div className="row-center gap-lg p-lg">
                <p className="text-red">!! Change Here Then Submit </p>
                <input type="text" onKeyDown={(e) => e.key === "Enter" && provider.updateQueryParams({ key: "name", value: e.target.value })} />
            </div>
        </>
    );
};
