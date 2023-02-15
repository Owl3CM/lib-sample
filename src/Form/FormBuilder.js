import React from "react";
import FormGroupBuilder from "./FormGroupBuilder";
// import "../FormKit/formkit.css";
import FormSecripts from "./FormScripts";

const FormBuilder = ({ service, children, onChange = service?.updateQueryParams, init = service?.initQueryParams, className = "form-container", onClick }) => {
    console.debug("render FormContainer");
    React.useMemo(() => {
        const dfValues = FormSecripts.extractValues(children);
        init && init(dfValues);
    }, []);

    return (
        <div onClick={onClick} className={className}>
            <FormGroupBuilder prop={{ children, onChange }} />
        </div>
    );
};

export default React.memo(FormBuilder);

// import FormCleaner from "./FormCleaner";
// const [queryParams, setQueryParams] = React.useState(defaultQp);
// const [qp, setQp] = React.useState(0);
// const _onChange = (child) => {
//     return;
//     global.setQueryParams((prev) => {
//         const { key, type, value } = child;
//         prev[key] = { value, title: child.title || "_" };
//         if (value) prev[key].clear = child.clear;
//         if (type === "options" || type === "selector") prev[key].titleValue = child.options.find((option) => option.id == value).title;
//         return { ...prev };
//     });
//     onChange();
// };

{
    /* <FormCleaner queryParams={queryParams} setQueryParams={setQueryParams} />
                <p
                    onClick={() => {
                        setQp(qp + 1);
                        setQueryParams((prev) => {
                            prev[qp] = { value: qp, title: qp, clear: true };
                            return { ...prev };
                        });
                    }}>
                    {qp}
                </p> */
}
