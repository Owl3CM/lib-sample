import { UpdateItem } from "../Utils/MockGenerator";
import { Div, Fragment, Img, Span } from "./NodeBuilder";

const valdTyps = ["String", "Number", "Boolean", "Object", "Array", "ArrayImages", "Undefined", "Null"];
const getType = (obj) => {
    let type = Object.prototype.toString.call(obj).slice(8, -1);
    if (valdTyps.includes(type)) return type;
};

const Function = ({ item, key }) =>
    Span({
        className: "obj-text-1",
        innerText: JSON.stringify(item),
    });
const String = ({ item, key }) =>
    Span({
        className: "obj-text-1",
        innerText: item,
    });

const Boolean = ({ item, key }) =>
    Span({
        className: "obj-text-1",
        innerText: item,
    });

const StringArray = (item) =>
    Span({
        className: "obj-text-2 px-sm",
        innerText: `${item}, `,
    });

const Array = ({ item }) => {
    item = Object.values(item)
        .filter((value) => nullables.includes(value) === false)
        .sort((o) => (sortByType(o[1]) ? -1 : 1));
    return Div({}, [
        Span({
            className: "obj-text-3 px-sm",
            innerText: "[",
        }),
        Fragment(
            item.map((_i) => {
                let _type = getType(_i);
                return _type === "Object" || _type === "Array" ? _Object({ key: "", item: _i }) : StringArray(_i);
            })
        ),
        Span({
            className: "obj-text-3 px-sm",
            innerText: "]",
        }),
    ]);
};

const Image = ({ item }) =>
    Img({
        style: "max-height: 100px;object-fit: cover;",
        src: item,
    });

const ArrayImages = ({ item }) => {
    return item.map((_i) =>
        Img({
            height: 250,
            src: _i,
        })
    );
};

const nullables = [undefined, null, ""];

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function checkIsImageURL(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    // return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}
const JsonParser = (item, setItem, containerClass, onClick) => {
    const _item = Object.entries(item)
        .filter(([_, value]) => nullables.includes(value) === false)
        .sort((o) => (sortByType(o[1]) ? -1 : 1));
    function onclick() {
        // Info({ title: "Update Item", content: "Update Item" });
        UpdateItem(item);
        setItem && setItem(item);
    }

    let nodes = document.createElement("div");
    nodes.className = "json-builder";
    if (onClick)
        nodes.onclick = () => {
            onClick(item);
            setItem && setItem(item);
        };
    else nodes.onclick = onclick;

    nodes.id = item.id;

    // const rndCol = `rgba(${random(255)}, ${random(255)}, ${random(255)},${Math.random() / 2})`;
    // nodes.style.backgroundColor = rndCol;

    // nodes.style.background = `url(${item.image})`;
    // nodes.style.backgroundSize = "cover";
    // nodes.style.backgroundOrigin = "content-box";
    // nodes.style.backgroundRepeat = "no-repeat";

    _item.forEach(([key, value], _i) => {
        let type = getType(value);
        if (!type) return; //nodes.append(Span({}, [`${key}: ${value}`]));

        if (type === "Array") {
            if (key === "images") {
                type += "Images";
                value = Object.values(Object.values(value)[0]);
            }
        } else if (type === "String" && value.startsWith("http") && (key === "image" || checkIsImageURL(value))) type = "Image";

        nodes.append(
            Div({ className: `obj ${type}` }, [
                Span({
                    className: `obj-key`,
                    style: { fontSize: 12, letterSpacing: 1, paddingTop: 4 },
                    innerText: key,
                }),
                UiKit[type]({ key: _i, item: value }),
            ])
        );
    });
    if (containerClass) {
        if (typeof containerClass === "string") nodes = Div({ className: containerClass }, [nodes]);
        else {
            nodes = Div({ style: containerClass }, [nodes]);
            Object.entries(containerClass).forEach(([key, value]) => {
                nodes.style[key] = value;
            });
        }
    }

    return nodes;
};
const _Object = ({ key, item }) => {
    const _item = Object.entries(item)
        .filter(([_, value]) => nullables.includes(value) === false)
        .sort((o) => sortByType(o[1]));
    function onclick() {
        // Info({ title: "Update Item", content: "Update Item" });
        // UpdateItem(item);
    }

    let nodes = document.createElement("div");
    nodes.className = "obj";
    nodes.onclick = onclick;
    nodes.id = item.id;

    // const rndCol = `rgba(${random(255)}, ${random(255)}, ${random(255)},${Math.random() / 2})`;
    // nodes.style.backgroundColor = rndCol;

    // nodes.style.background = `url(${item.image})`;
    // nodes.style.backgroundSize = "cover";
    // nodes.style.backgroundOrigin = "content-box";
    // nodes.style.backgroundRepeat = "no-repeat";

    nodes.append(
        Span({
            innerText: "{",
        })
    );

    _item.forEach(([key, value], _i) => {
        let type = getType(value);
        if (!type) return; //nodes.append(Span({}, [`${key}: ${value}`]));

        if (type === "Array") {
            if (key === "images") {
                type += "Images";
                value = Object.values(Object.values(value)[0]);
            }
        } else if (type === "String" && value.startsWith("http") && (key === "image" || checkIsImageURL(value))) type = "Image";

        nodes.append(
            Div({ className: `obj ${type}` }, [
                Span({
                    className: `obj-key`,
                    innerText: key,
                }),
                UiKit[type]({ key: _i, item: value }),
            ])
        );
    });
    nodes.append(
        Span({
            innerText: "},",
        })
    );
    return nodes;
};
export default JsonParser;

const sortByType = (obj) => {
    const type = getType(obj);
    const _sortByType = {
        String: 1,
        Number: 2,
        Boolean: 3,
        ArrayImages: 4,
        Image: -1,
        Object: -1,
        Array: false,
        Undefined: false,
        Null: false,
    };
    return _sortByType[type];
};

const UiKit = {
    String,
    Number: String,
    Boolean,
    Object: _Object,
    Array,
    ArrayImages,
    Undefined: Fragment(),
    Null: Fragment(),
    Image,
    Function,
};

export const JsonBuilder = ({ item, containerClass, onClick, setItem }) => {
    return (
        <div
            id={item.id}
            ref={(ref) => {
                if (!ref || ref.innerHTML) return;
                const _setItem = (item) => {
                    ref.innerHTML = "";
                    ref.append(JsonParser(item, _setItem, containerClass, onClick));
                };
                _setItem(item);
            }}
        />
    );
};

const item = {
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
