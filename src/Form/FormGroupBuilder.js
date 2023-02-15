import React from "react";
import GetQueryChild from "../FormKit/FormKit";

const FormGroupBuilder = ({ prop }) =>
    React.useMemo(() => {
        let _final = [];
        prop.children?.map((group) => {
            let _bodies = [];
            group.children.map((child) => {
                child.onChange = (value, clear) => {
                    child.value = value;
                    prop.onChange(child, clear);
                };
                if (child.children && !child.type) child.type = "group";
                let __child = GetQueryChild(child);
                __child && _bodies.push(__child);
            });
            _final.push({
                className: group.className || "form-section",
                bodies: _bodies,
            });
        });
        return _final.map((group, i) => (
            <div key={i} className={group.className}>
                {group.bodies}
            </div>
        ));
    }, []);

export default FormGroupBuilder;
