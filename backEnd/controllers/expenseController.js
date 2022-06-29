const Expense = require("../models/expense")


module.exports.getAllExpenses = async(req,res) =>{
    const expenses = await Expense.find()
    return res.status(200).json(expenses)
}


module.exports.getExpenseById = async(req,res) =>{
    const {id} = req.params
    
    Expense.findOne({_id:id})
        .then(
            (data)=>{
                return res.status(200).json(data)
            }
        )
        .catch(
            (err)=>{
                return res.status(404).json({"msg":err.message})
            }
        )

}