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
}
