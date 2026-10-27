import express from "express"
import cors from "cors"
import productRouter from "./router/productRouter.js"
import userRouter from "./router/userRouter.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)


app.listen(9091, () => console.log("Server Started"))

