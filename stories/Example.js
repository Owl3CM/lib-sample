import "../css/index.css";
import React from "react";
import { FormBuilder, Grid, PagenatedScroller } from "../index";
import TestService from "./TestService";

const Example = () => {
    const service = React.useMemo(() => new TestService(), []);
    return (
        <PagenatedScroller service={service}>
            <FormBuilder
                service={service}
                children={formChildren}
                init={(queryParams) => service.initQueryParams(queryParams)}
                onChange={({ key, value }) => service.updateQueryParams({ key, value })}
            />
            <Grid service={service} />
        </PagenatedScroller>
    );
};

const formChildren = [
    {
        className: "form-section",
        children: [
            {
                key: "query",
                type: "text",
                title: "Search...",
                value: "",
                storageKey: "search-query",
                containerClass: "query-input",
            },
            {
                key: "currencyId",
                type: "popupSelector",
                title: "Currency",
                value: 1,
                storageKey: "q-currencyId",
                options: [
                    { id: 1, title: "دينار" },
                    { id: 2, title: "دلار" },
                ],
            },
        ],
    },
];
export default Example;
