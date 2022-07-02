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
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    date:{
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

module.exports = mongoose.model("expense",expenseSchema)
