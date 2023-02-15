export default class Utils {
  static Round = (num) => Math.round(num * 100) / 100
  static getStorage = (key) => JSON.parse(localStorage.getItem(key))
  static setStorage = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value))
  static removeAllChildNodes(parent) {
    while (parent.firstChild) parent.removeChild(parent.firstChild)
  }
  static uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      }
    )
  }
  // static hasValue = (value) => [undefined, null, -1, "", "-1"].includes(value) === false;
  static hasValue = (value) => [undefined, null, ''].includes(value) === false
  static Formate = (amount) => {
    let newVal = `${amount}`?.replace('-', '').split('.'),
      beforPoint = newVal[0],
      length = beforPoint?.length,
      owl =
        newVal[1] && !newVal[1]?.startsWith('00')
          ? `.${newVal[1].length > 2 ? newVal[1].substring(0, 2) : newVal[1]}`
          : ''
    for (let o = length; o > 0; o -= 3)
      o - 3 > 0
        ? (owl = `,${beforPoint.substring(o, o - 3)}${owl}`)
        : (owl = beforPoint.substring(0, o) + owl)
    return amount >= 0 ? owl : `- ${owl}`
  }

  static FormateWithCurrency = (amount, currencyId) => {
    let newVal = `${amount}`?.replace('-', '').split('.'),
      beforPoint = newVal[0],
      length = beforPoint?.length,
      owl =
        newVal[1] && !newVal[1]?.startsWith('00')
          ? `.${newVal[1].length > 2 ? newVal[1].substring(0, 2) : newVal[1]}`
          : ''
    for (let o = length; o > 0; o -= 3)
      o - 3 > 0
        ? (owl = `,${beforPoint.substring(o, o - 3)}${owl}`)
        : (owl = beforPoint.substring(0, o) + owl)

    let formated = `${owl}  ${getShortCurrency(currencyId)}`
    return amount >= 0 ? formated : `${formated} -`
  }
  static generateQuery = (query, url) => {
    query = Object.entries(query).reduce((acc, [key, value]) => {
      if (Utils.hasValue(value.value)) acc[key] = value.value
      return acc
    }, {})
    return `/${url}?${new URLSearchParams(query)}`
  }

  static setupStorage = ({ provider, storageKey, storageType = 'local' }) => {
    const storage = storageType === 'local' ? localStorage : sessionStorage

    const getCleanString = (text = '') =>
      storageKey + text.replace(/[?&=/!]/g, '-')
    provider.getStored = (store_key) =>
      JSON.parse(storage.getItem(getCleanString(store_key)))
    provider.setStorage = (store_key, data) => {
      let _storeKey = getCleanString(store_key)
      if (Object.values(data).length > 0)
        storage.setItem(_storeKey, JSON.stringify(data))
      else storage.removeItem(_storeKey)
    }
    provider.removeStored = () => {
      for (let i = 0; i < storage.length; i++) {
        let key = storage.key(i)
        if (key.startsWith(storageKey)) storage.removeItem(key)
      }
    }
  }
}

export const getShortCurrency = (currencyId) =>
  ({
    undefined: '',
    0: 'د.ع',
    1: 'د.ع',
    2: '$',
    3: '€',
    4: '£',
    5: '₪',
    6: '₹',
    7: '₩',
    8: '¥',
    9: '₺',
    10: '₴',
    11: '₫'
  }[currencyId])

// export const getBusinesses = async (hasDefault = true) => {
//     let stored = JSON.parse(sessionStorage.getItem("businesses-list"));
//     if (!stored) {
//         let businessesOptions = [];
//         let data = await getApi("hub").get("/businesses");
//         data.forEach(({ business }) => {
//             //.sort((a, b) => a.name.length - b.name.length)
//             businessesOptions.push({ title: business.title, id: business.id, categoryId: business.businessCategory.id });
//         });
//         sessionStorage.setItem("businesses-list", JSON.stringify(businessesOptions));
//         stored = businessesOptions;
//     }
//     return hasDefault && stored.length > 1 ? [{ key: "storedId", title: "كل الشركات", id: "" }, ...stored] : stored;
// };

export const AccountsStatues = {
  //
  'دائن / علينا': 'Credit',
  'مدين / لنا': 'Debt',
  'دائن علينا': 'Credit',
  'مدين لنا': 'Debt',
  '': 'Debt',
  null: 0,
  undefined: 0
}

export const ConvertStateToKey = (state) => AccountsStatues[state]
