const mongoose = require("mongoose")


const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        require:true
    }
},{
    timestamps: true
})


module.exports = mongoose.model("category",CategorySchema)