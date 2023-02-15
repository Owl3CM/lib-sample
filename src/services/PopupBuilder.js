import React from "react";

const getGlobalProvider = (id) => {
    if (!id) return global;
    if (!global[id]) global[id] = {};
    return global[id];
};
const PopupBuilder = ({ provider, id = "popup", className = "popup-builder" }) => {
    const _provider = React.useMemo(() => provider || getGlobalProvider(id), []);

    [_provider.popup, _provider.setPopup] = React.useState(_provider.popup);

    return _provider.popup ? (
        <div
            id={id}
            onClick={({ target }) => {
                let is = target.getAttribute("is");
                if (is === "popup-close-button" || target.id === id) {
                    _provider.popup.onClose && _provider.popup.onClose();
                    _provider.setPopup(null);
                }
            }}
            className={className}>
            <div is="popup-close-button" class="popup-child">
                {_provider.popup.page}
            </div>
        </div>
    ) : (
        <></>
    );
};

export default React.memo(PopupBuilder);
