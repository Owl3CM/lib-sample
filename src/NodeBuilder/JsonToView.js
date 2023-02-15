import React, { Fragment } from "react";
const valdTyps = ["String", "Number", "Boolean", "Object", "Array", "ArrayImages", "Undefined", "Null"];
const getType = (obj) => {
    let type = Object.prototype.toString.call(obj).slice(8, -1);
    if (valdTyps.includes(type)) return type;
};

const String = ({ item, key }) => (
    <span key={key} className="text-gray-700">
        {item}
    </span>
);

const Boolean = ({ item, key }) => <span key={key} className="text-gray-700">{`${item}`}</span>;

const StringArray = (item) => (
    <Fragment>
        <span className="text-cyan-500 px-2">-</span>
        <span className="text-gray-600">{item} </span>
    </Fragment>
);

const Array = ({ item }) => {
    item = Object.values(item)
        .filter((value) => nullables.includes(value) === false)
        .sort((o) => (sortByType(o[1]) ? -1 : 1));
    return (
        <div>
            <span className="text-cyan-500  px-2">{"["}</span>
            {item.map((_i, i) => {
                let _type = getType(_i);
                return <Fragment key={i}>{_type === "Object" || _type === "Array" ? <JsonToView item={_i} /> : StringArray(_i)}</Fragment>;
            })}
            <span className="text-cyan-500 px-2">{"]"}</span>
        </div>
    );
};

const ArrayImages = ({ item }) => {
    return item.map((_i) => <img key={_i} src={_i} style={{ width: 150 }} />);
};

const nullables = [undefined, null, ""];

const JsonToView = ({ item }) => {
    item = Object.entries(item)
        .filter(([_, value]) => nullables.includes(value) === false)
        .sort((o) => (sortByType(o[1]) ? -1 : 1));

    return item.map(([key, value], _i) => {
        let type = getType(value);
        if (!type) return <span></span>;

        if (type === "Array") {
            if (key === "images") {
                type += "Images";
                value = Object.values(Object.values(value)[0]);
            }
        }
        return (
            <div key={key} className={`obj flex-grow ${TypeColors[type]}`}>
                <span className={`font-bold rounded`} style={{ fontSize: 12, letterSpacing: 1, paddingTop: 4 }}>
                    {key}
                </span>
                <span className="text-gray-400 px-2">{":"}</span>
                {UiKit[type]({ key: _i, item: value })}
            </div>
        );
    });
};
export default JsonToView;

const sortByType = (obj) => {
    const type = getType(obj);
    const _sortByType = {
        String: true,
        Number: true,
        Boolean: true,
        ArrayImages: true,
        Object: false,
        Array: false,
        Undefined: false,
        Null: false,
    };
    return _sortByType[type];
};

let arrayTypeColor = "text-string-1 shadow-1";
const TypeColors = {
    String: arrayTypeColor,
    Number: "text-int-1 shadow-1",
    Boolean: "text-purple-500 shadow-purple",
    Object: "text-gray-400 shadow-red",
    Array: "text-cyan-400 shadow-cyan",
    ArrayImages: "text-cyan-400 shadow-cyan",
    Undefined: () => <Fragment />,
    Null: () => <Fragment />,
};

const UiKit = {
    String,
    Number: String,
    Boolean,
    Object: JsonToView,
    Array,
    ArrayImages,
    Undefined: () => <Fragment />,
    Null: () => <Fragment />,
};
