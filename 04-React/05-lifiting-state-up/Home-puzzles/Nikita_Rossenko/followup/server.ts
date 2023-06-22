import express from 'express'
import balloonsRouter from './API/routes/mainRoute'
const app = express()

app.use(express.json())

app.use("/api", balloonsRouter)

app.listen(5000,() => {
    console.log("Server started at port 5000")
})