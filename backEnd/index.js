const express = require("express")
require("./config/database").connect()
const app = express()
const authRouter = require("./routers/authRouter")
const userRouter = require("./routers/userRouter")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/auth" , authRouter)
app.use("/user",userRouter)

app.listen(8080,()=>{
    console.log("listening to port 8080")
})