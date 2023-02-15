import { PagenationService } from "../services";
import Urls from "./Urls";

export default class TestService extends PagenationService {
    constructor() {
        const endpoint = "todos";
        const { baseURL, headers } = Urls.test;
        super({ baseURL, headers, endpoint, storageKey: "test-storage", storageType: "session" });
        this.endpoint = endpoint;
    }

    getItem = async (id) => {
        return await this.provider.get(`${this.endpoint}/id`);
    };
    deleteItem = async (id) => {
        return await this.provider.delete(`${this.endpoint}/id`);
    };
    addItem = async (item) => {
        return await this.provider.post(this.endpoint, item);
    };
    updateItem = async (item) => {
        return await this.provider.put(this.endpoint, item);
    };
}
