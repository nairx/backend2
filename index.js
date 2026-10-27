import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import productRouter from "./router/productRouter.js"
import userRouter from "./router/userRouter.js"

dotenv.config()

const app = express()

const DBUSER = process.env.DBUSER
const DBPASSWORD = process.env.DBPASSWORD

console.log(DBUSER)
console.log(DBPASSWORD)

app.use(express.json())
app.use(cors())

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)




app.listen(9091, () => console.log("Server Started"))

