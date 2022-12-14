const mongoose = require("mongoose")



module.exports.connect = () =>{
    mongoose
        .connect(
            "mongodb+srv://Admin:Myperfect23@cluster0.jpxwzal.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser:true,
                useUnifiedTopology: true,
            }
        ).then(
            ()=>{
                console.log("connected to database")
            }
        ).catch(
            (e)=>{
                console.log(e)
                process.exit(1)
            }
        )
}