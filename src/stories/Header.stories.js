import React from "react";
import { Test } from "../services";

export default {
    title: "Test",
    component: Test,
    parameters: {
        layout: "fullscreen",
    },
};
export const Template = (args) => <Test {...args} />;
