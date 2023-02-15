import { P, Span } from "./NodeBuilder";
import TimerFunctions from "./Secripts";
import "./nodes.css";

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

const Info = ({ title = "", content = "", timeout = 4000, type = "default", haveBorder: displayBorder = true }) => {
    let id = title + content;

    // console.log({ title, content, timeout, type });
    const { bg, text, border } = colorByType[type];
    let style = displayBorder ? `background-color:#ffffff; border-left: solid 8px ${border};color:${text}` : `background-color:${bg};color:${text};`;

    // if (timeout > 0) setTimeout(removeMessage, timeout);

    if (timeout < 1 || TimerFunctions.callBackAlreadyPending(id) === false) setNewInfo();
    else TimerFunctions.restartCallBack({ id, timeout });

    function setNewInfo() {
        const infoContainer = P({ style, className: "info-container info-fade-in" }, [
            //
            Span({
                className: "x primary-text",
                innerText: "x",
                style: `background-color:${text}99;`,
                onclick: () => {
                    TimerFunctions.remvoeCallBack(id);
                    removeMessage();
                },
            }),
            Span({ style: `color:${text}`, className: "primary-text", innerText: Language[title] || title }),
            content ? Span({ style: `color:${text}`, className: "secondary-text", innerText: Language[content] || content }) : "",
        ]);
        document.body.append(infoContainer);

        function onRepated() {
            infoContainer.classList.remove("info-fade-in");
            infoContainer.classList.add("shake");
            setTimeout(() => {
                infoContainer.classList.remove("shake");
            }, 300);
        }

        function removeMessage() {
            infoContainer.classList.add("info-fade-out");
            setTimeout(() => {
                infoContainer.remove();
            }, 500);
        }

        TimerFunctions.addPendingcallBack({ id, timeout, callback: removeMessage, onRepated });
    }
};

export default Info;
