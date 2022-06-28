const mongoose = require("mongoose")

module.exports.connect = () =>{
    mongoose
        .connect(
            "mongodb://localhost/BudgetTracker",{
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