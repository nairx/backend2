import express from "express"
import * as productController from "../controller/productController.js"

const Router = express.Router()

Router.get("/", productController.getProducts)

export default Router;

