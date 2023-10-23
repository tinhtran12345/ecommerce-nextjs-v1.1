import products from "../../../public/data/products";

import slugify from "slugify";

export const getAllProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
};

export const getProductItem = (id) => {
    const result = products.find((product) => {
        const slug = slugify(product.title, {
            replacement: "-", // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: false, // convert to lower case, defaults to `false`
            strict: true, // strip special characters except replacement, defaults to `false`
            locale: "vi", // language code of the locale to use
            trim: true, // trim leading and trailing replacement chars, defaults to `true`
        });
        return slug === id;
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (result) {
                resolve(result);
            }
            reject({});
        }, 3000);
    });
};
