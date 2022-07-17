const Transaction = require("../models/transaction")


module.exports.getAllTransactions = async(req,res) =>{
    const trx = await Transaction.find()
                            .populate("category")
                            .populate("user")
    return res.status(200).json(trx)
}


module.exports.getTransactionById = async(req,res) =>{
    const {id} = req.params
    
    Transaction.findOne({_id:id})
        .populate("category")
        .populate("user")
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


module.exports.addtransaction = async(req,res)=>{
    const {name,description,category,amount,user,type} = req.body

    const newTrx = new Transaction({
        name:name.toLowerCase(),
        description : description,
        category:category,
        amount:amount,
        user:user,
        date : new Date().toLocaleDateString(),
        type:type
    })

    newTrx.save().then(
        ()=>{
            return res.status(200).json({"msg":"Transaction Added"})
        }
    ).catch(
        (err)=>{
            return res.status(404).json({"msg":err.message})
        }
    )
}


module.exports.deleteTransaction = (req,res) =>{
    Transaction.deleteOne({_id: req.params.id})
        .then(
            ()=>{
                return res.status(200).json({"msg":"Transaction is deleted"})
            }
        )
        .catch(
            (err)=>{
                return res.status(404).json({"msg":err.message})
            }
        )
}




module.exports.deleteAll = (req,res)=>{
    Transaction.deleteMany()
        .then(
            ()=>{
                return res.status(200).json({"msg":"all Transactions are deleted!"})
            }
        )
        .catch(
            (err)=>{
                return res.status(404).json({"msg":err.message})
            }
        )
}


module.exports.getUserExpenses = async(req,res) =>{
    const {user} = req.params
    const totalExpenses = await Expense.find({user:user, type:"expense"})
    let totalAmount = 0
    totalExpenses.map(
        (exp) =>{
            totalAmount += exp.amount
        }
    ) 
    return res.status(200).json({"amount": totalAmount, "data": totalExpenses})
}


module.exports.totalamountExpenses = async(req,res)=>{
    const {user} = req.params
    const totalExpenses = await Expense.find({user:user, type:"expense"})
    let totalAmount = 0
    totalExpenses.map(
        (exp) =>{
            totalAmount += exp.amount
        }
    ) 
    return res.status(200).json({"msg": totalAmount})
}

module.exports.getExpenseToday = async(req,res) =>{
    const {user} = req.params
    const TodayExpense = await Expense.find({date :new Date().toLocaleDateString(), user:user, type:"expense"})
    let TodayAmount = 0
    TodayExpense.map(
        (exp)=>{
            TodayAmount += exp.amount
        }
    )
    return res.status(200).json({"amount":TodayAmount , "data": TodayExpense})

}

module.exports.todayAmountExpense = async(req,res)=>{
    const {user} = req.params
    const TodayExpense = await Expense.find({date :new Date().toLocaleDateString(), user:user, type:"expense"})
    let todayAmount = 0
    TodayExpense.map(
        (exp) =>{
            todayAmount += exp.amount
        }
    ) 
    return res.status(200).json({"msg": todayAmount})
}
