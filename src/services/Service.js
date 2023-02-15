import ApiService from "./ApiService";

export default class Service {
    state = "none";
    setState = () => {};

    constructor({ baseURL, headers, storageKey, storageType = "local" }) {
        this.provider = new ApiService({ baseURL, headers, storageKey, storageType });
    }
}
