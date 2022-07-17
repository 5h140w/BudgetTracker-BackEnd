const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({
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
        required:true
    },
    type:{
        type:String,
        required:true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("trnasaction",TransactionSchema)
