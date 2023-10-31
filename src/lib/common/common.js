export const getNumber = (string) => {
    const number = string.match(/\d/g);
    return +number.join("");
};
