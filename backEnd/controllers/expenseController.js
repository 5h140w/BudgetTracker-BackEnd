const Expense = require("../models/expense")


module.exports.getAllExpenses = async(req,res) =>{
    const expenses = await Expense.find()
    return res.status(200).json(expenses)
}
