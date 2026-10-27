import products from "../model/productModel.js";

const productModel = products;

const getProducts = () => {
    return productModel;
}

export {getProducts}