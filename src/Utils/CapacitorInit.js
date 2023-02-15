// import { AppUpdate, AppUpdateAvailability } from "@capawesome/capacitor-app-update";
// import { SafeArea } from "capacitor-plugin-safe-area";
// // import OneSignal from "onesignal-cordova-plugin";
// import { App as Cap } from "@capacitor/app";
// // import Notifications from "../API/Notifications";

// const CapacitorInit = async () => {
//     setTimeout(() => {
//         performImmediateUpdate();
//     }, 100);

//     global.onBack = () => {
//         window.history.back();
//     };

//     // setOneSignal();
//     if (global.platform === "ios") {
//         preventZooming();
//         addSafeArea();
//         addBackOnSwaip();
//     } else if (global.platform === "android") {
//         Cap.addListener("backButton", () => {
//             if (window.location.pathname !== "/") global.onBack();
//             else Cap.exitApp();
//         });
//     }
// };

// export default CapacitorInit;

// async function addSafeArea() {
//     const { insets } = await SafeArea.getSafeAreaInsets();
//     document.querySelector(":root").style.setProperty("--safe-area-top", `${insets.top + 4}px`);
// }

// function preventZooming() {
//     window.addEventListener(
//         "touchmove",
//         (e) => {
//             if (e.scale !== 1) e.preventDefault();
//         },
//         { passive: false }
//     );
// }

// function addBackOnSwaip() {
//     let startX = 0;
//     const threshold = 50;
//     const backArea = 25;

//     const backTrigger = () => {
//         global.onBack();
//     };

//     document.addEventListener("touchstart", ({ touches }) => {
//         startX = touches[0].clientX;
//     });
//     document.addEventListener("touchend", ({ changedTouches }) => {
//         if ((startX < backArea || startX > window.innerWidth - backArea) && Math.abs(changedTouches[0].clientX - startX) > threshold) backTrigger();
//     });
// }

// const performImmediateUpdate = async () => {
//     const result = await AppUpdate.getAppUpdateInfo();
//     if (result.updateAvailability === AppUpdateAvailability.UPDATE_AVAILABLE && result.immediateUpdateAllowed) await AppUpdate.performImmediateUpdate();
// };

// // const setOneSignal = () => {
// //     try {
// //         OneSignal.setAppId("410398b1-baa8-4bb9-aeba-16ed0dc4322d");
// //         OneSignal.setNotificationOpenedHandler(function (data) {
// //             let url = data?.notification?.additionalData?.url;
// //             if (url) {
// //                 if (url.startsWith("http")) window.open(url, "_blank");
// //                 else {
// //                     let _url = window.location.pathname + url;
// //                     _url = _url.replace("//", "/");
// //                     window.open(_url, "_self");
// //                 }
// //             }
// //         });
// //         if (localStorage.getItem("pushToken")) return;
// //         OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
// //             if (accepted && localStorage.getItem("token")) {
// //                 OneSignal.getDeviceState((s) => {
// //                     Notifications.sendToken(s.userId);
// //                 });
// //             }
// //         });
// //     } catch {}
// // };
