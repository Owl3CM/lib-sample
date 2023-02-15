import React from "react";
import { Test } from "../services";
import Example from "./Example";
export default {
    title: "Test",
    component: Example,
    parameters: {
        layout: "fullscreen",
    },
};
// export const Template = (args) => <Test {...args} />;
export const Template = (args) => <Example {...args} />;
