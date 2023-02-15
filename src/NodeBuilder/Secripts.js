export default class TimerCallbacks {
    static allCallbacks = {};

    static callBackAlreadyPending = (id) => !!this.allCallbacks[id]?.timeoutId;

    static restartCallBack = ({ id, timeout }) => {
        // console.log("restartCallBack");
        this.allCallbacks[id]?.onRepated();
        clearTimeout(this.allCallbacks[id].timeoutId);
        this.allCallbacks[id].timeoutId = setTimedCallBack({ id, timeout });
    };

    static remvoeCallBack = (id) => {
        // console.log("remvoeCallBack");
        if (this.callBackAlreadyPending(id)) {
            clearTimeout(this.allCallbacks[id].timeoutId);
            delete this.allCallbacks[id];
        }
    };

    static addPendingcallBack = ({ id, timeout, callback, onRepated }) => {
        // console.log("addPendingcallBack");
        this.remvoeCallBack(id);
        this.allCallbacks[id] = {
            callback,
            timeout,
            onRepated,
            timeoutId: setTimedCallBack({ id, timeout, callback }),
        };
    };
}

const setTimedCallBack = ({ id, timeout, callBack }) => {
    // console.log("setTimedCallBack");
    if (callBack) TimerCallbacks.allCallbacks[id].callBack = callBack;

    return setTimeout(() => {
        TimerCallbacks.allCallbacks[id].callback();
        // console.log("TimerCallbacks.allCallbacks[id].callback()");
        delete TimerCallbacks.allCallbacks[id];
    }, timeout);
};

// let abortController = null;
// const handleClick = () => {
//     abortController?.abort();
//     abortController = new AbortController();

//     setAbortableTimeout(
//         callBack logTimeout() {
// console.log("Timer executed at %s \u{1F4AA}!", Date.now());
//         },
//         1000,
//         abortController.signal
//     );
// };

// callBack setAbortableTimeout(callback, delayInMilliseconds, signal) {
//     const internalTimer = setTimeout(internalCallback, delayInMilliseconds);

//     const handleAbort = () => {
//         console.warn("Canceling timer (%s) via signal abort.", internalTimer);
//         clearTimeout(internalTimer);
//     };

//     const internalCallback = () => {
//         signal?.removeEventListener("abort", handleAbort);
//         callback();
//     };
//     signal?.addEventListener("abort", handleAbort);
// }
