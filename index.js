import express from "express"
import cors from "cors"
import productRouter from "./router/productRouter.js"

const app = express()
app.use(express.json())
app.use(cors())


app.listen(9091, () => console.log("Server Started"))

app.use("/api/", productRouter)
// app.use("/api/users", userRouter)