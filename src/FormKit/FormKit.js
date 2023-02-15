import React from "react";
import TextInput from "./TextInput";
import Boolean from "./Boolean";
import PopupSelector from "./PopupSelector";
import Date from "./Date";
import FilterButton from "./FilterButton";
import Options from "./Options";
import Group from "./Group";
import ScannerIcon from "./ScannerIcon";
import Selector from "./Selector";
import LinkLabel from "./LinkLabel";

const FormKit = {
    text: TextInput,
    boolean: Boolean,
    selector: Selector,
    date: Date,
    filter: FilterButton,
    options: Options,
    group: Group,
    scanner: ScannerIcon,
    popupSelector: PopupSelector,
    link: LinkLabel,
};

const GetQueryChild = (child) => {
    const Body = FormKit[child.type];
    return Body ? <Body {...child} queryKey={child.key} /> : null;
};

export default GetQueryChild;
