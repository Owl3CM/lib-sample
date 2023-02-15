import React from "react";
const Options = ({ id, queryKey, options, onChange, type, className, getData, storageKey, value, title }) => {
    const [optionsState, setOptions] = React.useState(options || []);
    console.debug("Selctor RD");
    const init = async () => {
        if (getData) {
            let _options = await getData();
            setOptions(_options);
        }
    };
    const onClick = ({ target, currentTarget }) => {
        let value = target.title;
        if (!value) return;
        currentTarget.querySelector(".selected")?.classList.remove("selected");
        target.classList.add("selected");
        if (storageKey) localStorage.setItem(storageKey, value);
        onChange();
    };
    React.useMemo(() => {
        init();
    }, []);

    return (
        <>
            {title && <p className="owl-title">{title}</p>}
            <div
                id={id || `${type}-${queryKey}`}
                onClick={onClick}
                className={`owl-options-container ${className || ""}`}
                onWheel={onWheel}
                onMouseMove={onDrag}
                onMouseDown={(e) => {
                    firstX = e.clientX;
                }}
                onMouseUp={(e) => {
                    firstX = 0;
                    draged = false;
                }}>
                {optionsState.map((item) => (
                    <p title={item.id} className={`owl-button-options ${item.className || ""} ${value == item.id ? "selected" : ""}`} key={item.id}>
                        {item.title}
                    </p>
                ))}
            </div>
        </>
    );
};
export default React.memo(Options);

let wheeled = false;
const onWheel = (e) => {
    if (wheeled) return;
    wheeled = true;
    setTimeout(() => {
        wheeled = false;
    }, 200);

    console.debug(e.currentTarget.clientWidth);
    let left = (e.currentTarget.clientWidth * e.deltaY) / 110;
    e.currentTarget.scrollBy({
        top: 0,
        left,
        behavior: "smooth",
    });
};
let firstX = 0;
let draged = false;
const onDrag = (e) => {
    if (firstX == 0 || draged) return;
    draged = true;

    let left = (e.currentTarget.clientWidth * 100) / 110;
    if (e.clientX - firstX > 10) {
        e.currentTarget.scrollBy({
            top: 0,
            left: -left,
            behavior: "smooth",
        });
    } else if (e.clientX - firstX < -10) {
        e.currentTarget.scrollBy({
            top: 0,
            left,
            behavior: "smooth",
        });
    } else
        setTimeout(() => {
            draged = false;
        }, 50);

    // console.debug(e.currentTarget.clientWidth);
    // let left = (e.currentTarget.clientWidth * e.deltaY) / 110;
    // e.currentTarget.scrollBy({
    //     top: 0,
    //     left,
    //     behavior: "smooth",
    // });
};
