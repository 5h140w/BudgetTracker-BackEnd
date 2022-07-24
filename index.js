const express = require("express")
require("./config/database").connect()
const app = express()
const cors = require("cors")
const authRouter = require("./routers/authRouter")
const userRouter = require("./routers/userRouter")
const categoryRouter = require("./routers/categoryRouter")
const expenseRouter = require("./routers/expenseRouter")
const depositRouter = require("./routers/depositRouter")
const port = process.env.PORT || 80


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/auth" , authRouter)
app.use("/user",userRouter)
app.use("/category",categoryRouter)
app.use("/expense", expenseRouter)
app.use("/deposit", depositRouter)

app.get("/",(req,res)=>{
    res.send("hello there")
})


app.listen(port,()=>{
    console.log("listening to port 8080")
})