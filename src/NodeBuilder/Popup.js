import { Div, P, Span } from "./NodeBuilder";
import TimerFunctions from "./Secripts";
const Language = {};

const colorByType = {
    default: { bg: "#d5d8db", text: "#2f3b4b", border: "#2f3b4b" },
    error: { bg: "#fce0e0", text: "#bb4d4d", border: "#ee6363" },
    warn: { bg: "#feeacd", text: "#c47504", border: "#f89406" },
    success: { bg: "#edf5d2", text: "#4c5923", border: "#8ea641" },
    info: { bg: "#d5eaf0", text: "#216b81", border: "#2f96b4" },
    white: { bg: "#ffffff", text: "#2f3b4b", border: "#dddddd" },
    primary: { bg: "#2f3b4b", text: "#2f3b4b", border: "#2f3b4b" },
    secondary: { bg: "#999999", text: "#2f3b4b", border: "#999999" },
    tertiary: { bg: "#cccccc", text: "#2f3b4b", border: "#cccccc" },
};

const Popup = ({
    title = "Hello",
    content = "Am message !!",
    type = "default",
    confirm = { title: "Yas", action: () => {} },
    cancel = { title: "Cancel", action: () => {} },
}) => {
    let id = title + content;

    const { bg, text } = colorByType[type];
    let style = `background-color:${bg};color:${text};`;

    function setNewInfo() {
        const infoContainer = Div({ className: "popup-container" }, [
            Div({ style, className: "" }, [
                //
                Span({ style: `color:${text}`, className: "primary-text", innerText: Language[title] || title }),
                content ? Span({ style: `color:${text}`, className: "secondary-text", innerText: Language[content] || content }) : "",
                P({ className: "popup-buttons primary-text" }, [
                    Span({ innerText: confirm.title, onclick: removeMessage }),
                    Span({ id: "popup-confirm", innerText: cancel.title, onclick: removeMessage }),
                ]),
            ]),
        ]);
        document.body.append(infoContainer);

        function removeMessage({ target }) {
            if (target.id === "popup-confirm") confirm.action();
            infoContainer.classList.add("info-fade-out");
            setTimeout(() => {
                infoContainer.remove();
            }, 500);
        }
    }
    setNewInfo();
};

export default Popup;
