import React from "react";
import "./css/index.css";
import "./css/containers.css";
import "./css/root.css";
import "./css/elements.css";
import "./css/animations.css";
import "./css/theme.css";
import "./css/other.css";

export const Lols = ({ item: label = "test : " }) => {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => index + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {label}
            {index}
        </div>
    );
};

export default Lols;
