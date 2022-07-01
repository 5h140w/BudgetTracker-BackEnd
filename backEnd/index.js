const express = require("express")
require("./config/database").connect()
const app = express()
const cors = require("cors")
const authRouter = require("./routers/authRouter")
const userRouter = require("./routers/userRouter")
const categoryRouter = require("./routers/categoryRouter")
const expenseRouter = require("./routers/expenseRouter")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/auth" , authRouter)
app.use("/user",userRouter)
app.use("/category",categoryRouter)
app.use("/expense", expenseRouter)

app.listen(8080,()=>{
    console.log("listening to port 8080")
})