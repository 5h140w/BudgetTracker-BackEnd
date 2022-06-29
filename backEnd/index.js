const express = require("express")
require("./config/database").connect()
const app = express()
const authRouter = require("./routers/authRouter")
const userRouter = require("./routers/userRouter")
const categoryRouter = require("./routers/categoryRouter")


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/auth" , authRouter)
app.use("/user",userRouter)
app.use("/category",categoryRouter)

app.listen(8080,()=>{
    console.log("listening to port 8080")
})