import React from "react";
// import { JsonBuilder } from "../NodeBuilder/JsonToView";
const DefaultItemBuilder = ({ item, set, setItem }) => {
    return <div className="item-builder">{/* <JsonBuilder item={item} /> */}</div>;
};

export default DefaultItemBuilder;

const sample = {
    id: "943-34234kf-f32f-23f32f-c8",
    name: "Jhon Doe",
    descriptionT: "somthing going on here ok then this is a description so that is not a good idea",
    amBoolean: true,
    objectColction: [{ id: "KKKK" }, { name: "Obdestest" }, { description: "obdes" }],
    colction: ["one ", "test", "four", "four", "four", "owls"],
    object: {
        id: "K-sdf-KK-sdfK",
        name: "Jhon Doe",
        description: "obdes",
        description: "this is a description",
        idK: "K-sdf-KK-sdfK",
        nameK: "Obdes test by Jhon Doe",
    },
};
