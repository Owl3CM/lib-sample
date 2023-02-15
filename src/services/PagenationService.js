import Utils from "../Utils/Utils";
import ApiService from "./ApiService";

export default class PagenationService {
    items = [];
    setItems = (items) => {};
    state = "none";
    setState = (state) => {};

    offset = 0;
    limit = 25;
    query = "";
    canFetch = true;
    autoFetch = false;
    useCash = true;
    queryParams = {};

    addItem = (item) => {};
    updateItem = (query) => {};
    getItems = async (query) => {
        const data = await this.provider.get("/items");
    };
    #_init = false;

    constructor({ baseURL, headers, endpoint, onResult, storageKey, storageType }) {
        this.provider = new ApiService({
            baseURL,
            headers,
            storageKey,
            storageType,
        });

        this.fetch = async () => {
            this.canFetch = false;
            let query = this.query + `&offset=${this.offset}`;
            this.setState("itemsLoading");
            try {
                const result = await this.provider.get(query);
                this.#onResult(result, this);
            } catch (error) {
                this.#onError(error, this);
            }
        };

        this.reload = async () => {
            this.canFetch = false;
            this.offset = 0;
            this.query = Utils.generateQuery(this.queryParams, endpoint);
            try {
                const result = await this.provider.get(this.query);
                this.#onResult(result, this);
            } catch (error) {
                this.#onError(error, this);
            }
        };

        this.search = async (reloader) => {
            this.canFetch = false;
            this.offset = 0;
            if (!this.queryParams.limit && this.limit) this.queryParams.limit = { value: this.limit, title: "_" };

            this.query = Utils.generateQuery(this.queryParams, endpoint);

            if (this.useCash) {
                let cashItems = this.provider.getStored(this.query);
                if (cashItems) {
                    if (!this.#_init) {
                        this.#_init = false;
                        this.items = cashItems;
                    } else this.setItems(cashItems);
                    this.offset = cashItems.length;
                    this.setState("none");
                    setTimeout(() => {
                        this.canFetch = true;
                    }, 10);
                    return;
                }
            }
            this.state = "searching";
            this.setState("searching");
            try {
                const result = await this.provider.get(this.query);
                this.#onResult(result, this);
                if (reloader) {
                    reloader?.remove();
                }
            } catch (error) {
                this.#onError(error, this);
            }
        };
        // this.addScrollEvent(scrollerId);
    }

    // this.queryParams = {};

    // this.setHeader = (header) => {
    //     this.setHeaderState &&
    //         this.setHeaderState((_prev) => {
    //             let _newHeader = { ..._prev, ...header };
    //             if (this.useCash) {
    //                 this.setStorage("-header", _newHeader);
    //             }
    //             return _newHeader;
    //         });
    // };

    // if (onQueryChanged) {
    //     this.setQueryParmas = async (values) => {
    //         this.queryParams = values;
    //         let header = this.getStored("-header");
    //         if (header) {
    //             this.header = header;
    //         } else {
    //             setTimeout(() => {
    //                 this.setHeader(onQueryChanged(this, values, true));
    //             }, 1);
    //         }
    //         this.search(true);
    //     };
    //     this.updateQueryParams = (child) => {
    //         if (Utils.hasValue(child.value)) this.queryParams[child.key] = { value: child.value, title: child.title || "_" };
    //         else delete this.queryParams[child.key];
    //         onQueryChanged(this, { [child.key]: child });
    //         this.search();
    //     };
    // } else {
    // if (this.useCash)
    //     setTimeout(() => {
    //         let header = this.getStored("-header");
    //         this.setHeader(header);
    //     }, 1);

    initQueryParams = (values) => {
        this.queryParams = values;
        this.search();
    };
    setQueryParmas = (values) => {
        this.queryParams = values;
        this.search();
    };
    updateQueryParams = (child) => {
        if (child.value) this.queryParams[child.key] = { value: child.value, title: child.title || "_" };
        else delete this.queryParams[child.key];
        this.search();
    };
    // }

    #onError = (error, service) => {
        service.onError && service.onError(error);
        if (error.stack) error = { message: error.message, stack: error.stack };
        service.setState({ state: "error", error });
    };

    #onResult = async (data, service) => {
        if (service.onResult) {
            let modfied = await service.onResult(data, service);
            if (modfied) data = modfied;
        }
        let items = [];
        let _data = {};
        if (getType(data) === "Object") {
            Object.entries(data).forEach(([key, value]) => {
                if (Array.isArray(value)) items = value;
                else _data[key] = value;
            });
        } else items = data || [];

        if (service.useCash) {
            const provider = service.provider;
            if (service.offset === 0) {
                let allCashQueries = provider.getStored("") || [];
                if (!allCashQueries.includes(service.query)) {
                    allCashQueries.push(service.query);
                    provider.setStorage("", allCashQueries);
                }
                provider.setStorage(service.query, items);
            } else {
                let oldItems = provider.getStored(service.query) || [];
                provider.setStorage(service.query, [...oldItems, ...items]);
            }
        }

        if (service.offset === 0) service.setItems(items);
        else service.setItems((_prev) => [..._prev, ...items]);

        service.offset += items.length;

        setTimeout(() => {
            service.canFetch = service.limit && items.length >= service.limit;
        }, 100);

        if (service.autoFetch) {
            const scroller = document.getElementById(service.scrollerId);
            setTimeout(() => {
                scroller && scroller.scrollTo({ top: scroller.scrollHeight, left: 0 });
            }, 100);
        } else service.setState(service.items.length > 0 || items.length > 0 ? "none" : "noData");
    };

    // addScrollEvent(scrollerId) {
    //     setTimeout(() => {
    //         let scroller = document.getElementById(scrollerId);
    //         if (this.limit !== 0)
    //             scroller.addEventListener(
    //                 "scroll",
    //                 ({ target }) => {
    //                     if (this.canFetch && target.scrollHeight - target.scrollTop < target.clientHeight + 400) {
    //                         this.canFetch = false;
    //                         this.fetch();
    //                     }
    //                 },
    //                 { passive: true }
    //             );
    //     }, 100);
    // }
}

const getType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);
