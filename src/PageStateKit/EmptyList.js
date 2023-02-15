// import Lottie from "lottie-react";
import React from "react";
// import noData from "../lotties/noData.json";
import Language from "../Utils/Language";

let Titles = {
    items: "ThereIsNoItems",
    bzns: "ThereAreNoBusinesses",
    accounts: "ThereAreAccounts",
    customers: "ThereAreAccounts",
};

const EmptyList = ({ provider }) => {
    const title = Titles[provider.id] || "ThereIsNoData";
    return (
        <div className="flex col-span-full flex-col items-center justify-center m-auto">
            {/* <Lottie className="max-w-xl" animationData={noData} /> */}
            <p className="font-bold text-2xl carbonic pt-6">{"No Data"}</p>
            <p className="font-bold text-2xl carbonic pt-6">{Language[title]}</p>
        </div>
    );
};

export default React.memo(EmptyList);
