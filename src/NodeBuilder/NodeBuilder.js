// import Info from "../Addons/Info.js";
// import { UpdateItem } from "../Utils/MockGenerator.js";

export const CreateTag = (tag, props, children) => {
    const element = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
        element[key] = value;
    });
    children && element.append(...children);
    return element;
};

export function Div(props, children) {
    return CreateTag("div", props, children);
}
export function P(props, children) {
    return CreateTag("p", props, children);
}
export function Span(props) {
    return CreateTag("span", props);
}
export function Input(props) {
    return CreateTag("input", props);
}
export function Img(props, children) {
    return CreateTag("img", props, children);
}
export function Button(props) {
    return CreateTag("button", props);
}
export function Fragment(children = []) {
    // let fragment = document.createDocumentFragment();
    // fragment.append(...children);
    // return fragment;
    return CreateTag("fragment", {}, children);
}
export function LinkButton(props) {
    document.createElement("a");
    return CreateTag("a", props);
}
export const Br = () => document.createElement("br");

export function Select({ className, value, options, onChange }) {
    const selectNode = document.createElement("select");
    options.forEach((item) => {
        const optionNode = document.createElement("option");
        optionNode.value = item.id;
        optionNode.innerText = item.title;
        selectNode.append(optionNode);
    });

    selectNode.className = className;
    selectNode.onchange = onChange;
    selectNode.value = value;

    return selectNode;
}

export function Video(props, children) {
    props.id = "video";
    return CreateTag("video", props, children);
}
