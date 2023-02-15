const fomratter = new Intl.NumberFormat("en-US");
const Formatter = (amount) => fomratter.format(amount);
export default Formatter;

export const Round = (amount) => Math.round(amount * 1000) / 1000;
