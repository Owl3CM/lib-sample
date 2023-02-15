import React from "react";
import Services from "./Services";

export default {
    title: "Examples/Services",
    component: Services,
    parameters: { layout: "fullscreen" },
};
export const Template = (args) => <Services {...args} />;
export const Default = Template.bind({});
