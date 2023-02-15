import React from "react";
import { memo } from "react";
import PageStateKit from "./PageStateKit";

const getGlobalProvider = (id) => {
    if (!id) return global;
    if (!global[id]) global[id] = {};
    return global[id];
};

const ServiceStateBuilder = ({ id, service, pageStateKit = PageStateKit }) => {
    const _provider = React.useMemo(() => service || getGlobalProvider(id), []);

    [_provider.state, _provider.setState] = React.useState(_provider.state);

    return React.useMemo(() => {
        let PageState = getBuilder(_provider.state);

        return <PageState provider={_provider} />;
    }, [_provider.state]);
};

export default memo(ServiceStateBuilder);
function getBuilder(providerState) {
    let _state;
    if (typeof providerState === "string") {
        _state = providerState;
    } else if (typeof providerState === "object") {
        _state = providerState.state;
    }
    return PageStateKit[_state];
}
