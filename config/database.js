const mongoose = require("mongoose")

module.exports.connect = () =>{
    mongoose
        .connect(
            "mongodb+srv://shady:Sexyboy@23@cluster0.vnsnl.mongodb.net/test",{
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