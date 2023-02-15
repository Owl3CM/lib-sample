const Date = ({ prop }) => {
    console.debug("Date RD");
    const onSelect = ({ target }) => {
        prop.value = target.value;
        if (prop.showInClearBar) {
            prop.clear = () => {
                target.value = "";
            };
        }
        prop.onChange();
    };
    return (
        <div key={prop.key} className="owl-label-container">
            <input type="date" className="owl-date" defaultValue={prop.value} onChange={onSelect} />
            <p className="owl-label">{prop.title} </p>
        </div>
    );
};
export default Date;
