import React, { Fragment } from "react";

const FormCleaner = ({ queryParams, setQueryParams }) => {
    return React.useMemo(() => {
        const toDelete = Object.entries(queryParams).filter(([_, value]) => value.clear);
        return toDelete.length > 0 ? (
            <div className="owl-form-cleaner">
                {toDelete.map(([_, _queryProp]) => (
                    <button
                        key={_}
                        onClick={() => {
                            delete queryParams[_];
                            setQueryParams({ ...queryParams });
                            _queryProp.clear && _queryProp.clear();
                        }}
                        className="owl-button p-xs px-sm">
                        <span>{`X- ${_queryProp.title} : ${_queryProp.titleValue || _queryProp.value}`}</span>
                    </button>
                ))}
            </div>
        ) : (
            <Fragment />
        );
    }, [queryParams]);
};

export default FormCleaner;
