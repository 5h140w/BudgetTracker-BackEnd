const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(8080,()=>{
    console.log("listening to port 8080")
})