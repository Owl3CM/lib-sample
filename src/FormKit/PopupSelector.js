import React from "react";

const PopupSelector = ({ id, queryKey, onChange, options, title, className, value, storageKey, showInClearBar, getData }) => {
    const [popup, setPopup] = React.useState(false);
    const [prop, setProp] = React.useState({ options: [], selected: 0 });

    React.useMemo(() => {
        console.debug("PopupSelector RD");
        if (!id) id = queryKey + "-selector";

        if (getData) {
            setTimeout(async () => {
                let _options = await getData();
                let selected = !options && !value ? 0 : _options.findIndex((option) => option.id == value);
                if (selected === 0 && _options.length > 0) {
                    onChange(_options[0].id);
                }
                setProp({ options: _options, selected });
            }, 0);
        } else if (options) {
            setProp({ options, selected: options.findIndex((option) => option.id == value) });
        }
    }, []);

    const _title = React.useMemo(() => {
        if (!prop) return title;
        if (prop.options.length === 1) return prop.options[0]?.title;
        const founded = prop.options[prop.selected];
        return founded ? founded.dispalyTitle || founded.title : "";
    }, [prop]);

    return prop.options.length > 0 ? (
        <div
            onClick={() => {
                prop.options?.length > 1 && setPopup(!popup);
            }}
            id={id}
            className={"popup-selector-button " + className}>
            <p style={{ minWidth: "max-content" }}>{_title}</p>
            <svg
                height={16}
                style={{ marginRight: "auto", opacity: prop.options?.length > 1 ? 1 : 0.2 }}
                className="popup-selector-button-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 264.55 377.7">
                <path
                    d="M501,311c7,1.28,12.13,5.47,17,10.42q53.38,53.68,107,107.1c6.07,6.05,8.78,12.87,6.06,21.23a18.8,18.8,0,0,1-28.52,9.66,43.23,43.23,0,0,1-6-5.27q-46.15-46.08-92.23-92.23c-1.29-1.29-2.34-2.82-3.85-4.67-1.85,1.74-3.17,2.91-4.41,4.15q-47,47-94,94c-5.1,5.11-10.84,8.32-18.26,7.12a18.86,18.86,0,0,1-11.66-31c3.74-4.45,8.09-8.39,12.21-12.51,33.45-33.46,66.81-67,100.5-100.21,3.68-3.61,9.3-5.25,14-7.81Z"
                    transform="translate(-367.68 -311)"
                />
                <path
                    d="M499.36,643.31c9.21-9.26,17.17-17.31,25.18-25.32q37.1-37.14,74.23-74.21c11.36-11.3,29-7,32.8,7.89,2,7.65-.64,14-6.13,19.45Q603.65,592.8,582,614.59q-33,33-66.09,66.08c-10.72,10.7-21,10.71-31.68,0q-54.62-54.59-109.25-109.18c-6.05-6-8.86-12.85-6.19-21.21a18.78,18.78,0,0,1,28.43-9.93,41.48,41.48,0,0,1,6,5.28q46.32,46.27,92.58,92.62C497,639.55,497.89,641.24,499.36,643.31Z"
                    transform="translate(-367.68 -311)"
                />
            </svg>
            {popup && (
                <div className="popup-selector-container">
                    <div className="popup-selector">
                        {prop.options.map((option, i) => (
                            <p
                                key={option.id}
                                onClick={() => {
                                    setProp((_prev) => ({ ..._prev, selected: i }));
                                    _onChange(option);
                                }}
                                className="popup-selector-option">
                                {option.title}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    ) : (
        <></>
    );

    function _onChange(option) {
        let value = option.id;
        value = value;
        if (option?.className) className = option?.className;
        if (storageKey) localStorage.setItem(storageKey, value);

        let clear = showInClearBar
            ? () => {
                  value = options[0].id;
                  className = options[0]?.className;
                  if (storageKey) localStorage.setItem(storageKey, value);
              }
            : null;
        onChange(option.id, clear);
    }
};
export default React.memo(PopupSelector);
