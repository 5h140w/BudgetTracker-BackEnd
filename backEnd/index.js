const express = require("express")
require("./config/database").connect()
const app = express()
const userRouter = require("./routers/userRouter")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/auth" , userRouter)

app.listen(8080,()=>{
    console.log("listening to port 8080")
})