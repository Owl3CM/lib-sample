import React from "react";
import ApiService from "./ApiService";
import Grid from "./Grid";
import PagenationService from "./PagenationService";

const MockItemsGenerator = (count, items = []) => {
    count += items.length;
    const generateWords = (count) => {
        let words = [];
        for (let i = 0; i < count; i++) {
            words.push(`word ${i}`);
        }
        return words;
    };

    for (let i = items.length; i < count; i++) {
        items.push({
            i,
            id: i,
            name: `Item ${i}`,
            description: `Description ${i}`,
            name: `name ${i}`,
            wholeSalePrice: `wholeSalePrice ${i}`,
            morabaaId: `morabaaId ${i}`,
            // test: generateWords(Math.random() * 100),
        });
    }
    return items;
};

const Test = () => {
    // const service = React.useMemo(() => {
    //     const _service = new PagenationService({
    //         baseURL: "https://jsonplaceholder.typicode.com",
    //         endpoint: "/posts",
    //     });
    //     _service.search();
    //     return _service;
    // }, []);

    const service = React.useMemo(() => {
        const _service = false
            ? new ApiService()
            : {
                  items: MockItemsGenerator(1_00),
                  canFetch: true,
                  loadMore: async () => {
                      service.canFetch = false;
                      console.log("load more");
                      await Utils.sleep(500);
                      service.items = MockItemsGenerator(25, service.items);
                      console.log("loaded");
                      service.canFetch = true;
                      return true;
                  },
                  search: () => {
                      console.log("search");
                  },
              };
        // const _service= new PagenationService({ baseURL : 'https://jsonplaceholder.typicode.com', endpoint:"posts", storageKey:'test',storage:localStorage})
        _service.search();
        return _service;
    }, []);

    return (
        <div>
            <Grid service={service} />
            Hi !!
        </div>
    );
};

export default Test;
