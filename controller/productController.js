import * as productService from "../service/productService.js"

const getProducts = (req, res) => {
    res.json(productService.getProducts())

}

export { getProducts }