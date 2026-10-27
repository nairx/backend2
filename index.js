import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import productRouter from "./router/productRouter.js"
import userRouter from "./router/userRouter.js"

dotenv.config()

const app = express()
const PORT = process.argv[2] || 9091
const DBUSER = process.env.DBUSER
const DBPASSWORD = process.env.DBPASSWORD

// console.log(DBUSER)
// console.log(DBPASSWORD)

app.use(express.json())
app.use(cors())

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)


app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))

