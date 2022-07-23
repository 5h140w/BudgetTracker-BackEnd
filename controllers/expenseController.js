const Expense = require("../models/transaction")


module.exports.getExpensesByUser = async (req,res)=>{
    const {user} = req.params
    const expenses = await Expense.find({user:user,type:"expense"})

    return res.status(200).json(expenses)
}

module.exports.getExpenseByID = async (req,res)=>{
    const {id}= req.params
    const expense =await Expense.findOne({_id:id})

    return res.status(200).json(expense)
    
}

module.exports.addExpense = (req,res) =>{
    const {name,description,category,amount,user} = req.body

    const newExpense = new Expense({
        name: name.toLowerCase(),
        description:description,
        category:category,
        amount:amount,
        user:user,
        date: new Date().toLocaleDateString(),
        type:"expense"
    })

    newExpense.save().then(
        ()=>{
            return res.status(200).json({"msg":"Expense Added"})
        }
    ).catch(
        (err)=>{
            return res.status(404).json({"msg":err.message})
        }
    )
}


module.exports.deleteAllExpense = (req,res)=>{
    const {user} = req.params
    Expense.deleteMany({user:user})
        .then(
            ()=>{
                return res.status(200).json({"msg":"Expenses are deleted"})
            }
        ).catch(
            (err)=>{
                return res.status(404).json({"msg":err.message})
            }
        )
}


module.exports.deleteExpenseByid = (req,res)=>{
    const {user,id} = req.params
    Expense.deleteOne({_id:id,user:user})
        .then(
            ()=>{
                return res.status(200).json({"msg":"Expense is deleted"})
            }
        ).catch(
            (err)=>{
                return res.status(404).json({"msg":err.message})
            }
        )
}