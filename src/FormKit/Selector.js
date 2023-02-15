import React from "react";

const getClass = (prop) => "owl-selctor " + (prop.className || "");

const Selector = ({ prop }) => {
    const [options, setOptions] = React.useState(prop.options);
    console.debug("Selector RD");
    const init = async () => {
        if (prop.getData) {
            let _options = await prop.getData();
            setOptions(_options);
            setTimeout(() => {
                document.getElementById(prop.id || prop.key + "-selector").value = prop.value;
            }, 10);
        }
    };
    React.useMemo(init, []);
    const _class = React.useMemo(() => getClass(prop), []);

    return (
        <select id={prop.id || prop.key + "-selector"} key={prop.key} defaultValue={prop.value} className={_class} onChange={onChange}>
            {options?.map((item) => (
                <option value={item.id} key={item.id}>
                    {item.title}
                </option>
            ))}
        </select>
    );

    function onChange(e) {
        let currentTarget = e.currentTarget;
        let value = e.target.value;
        prop.value = value;
        let founded = prop.options.find((o) => o.id == value);
        prop.className = founded?.className;
        currentTarget.className = getClass(prop);
        if (prop.storageKey) localStorage.setItem(prop.storageKey, value);

        if (prop.showInClearBar) {
            prop.titleValue = founded.title;
            prop.clear = () => {
                prop.value = prop.options[0].id;
                prop.className = prop.options[0]?.className;
                currentTarget.className = getClass(prop);
                currentTarget.value = prop.value;
                if (prop.storageKey) localStorage.setItem(prop.storageKey, prop.value);
            };
        }
        prop.onChange();
    }
};
export default React.memo(Selector);
