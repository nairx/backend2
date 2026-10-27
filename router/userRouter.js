import * as userController from "../controller/userController.js"
import express from "express"

const Router = express.Router()

Router.post("/login",userController.login)

export default Router