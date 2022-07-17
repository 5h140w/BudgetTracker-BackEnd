const Expense = require("../models/transaction")


module.exports.getExpensesByUser = async (req,res)=>{
    const {user} = req.params
    const expenses = await Expense.find({user:user,type:"expense"})

    return res.status(200).json({"data":expenses})
}

module.exports.getExpenseByID = async (req,res)=>{
    const {id}= req.params
    const expense =await Expense.findOne({_id:id})

    return res.status(200).json({"data":expense})
    
}

