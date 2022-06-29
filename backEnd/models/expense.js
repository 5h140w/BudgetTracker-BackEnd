const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    amount:{
        type:Number,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("expense",expenseSchema)