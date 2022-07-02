const Expense = require("../models/expense")


module.exports.getAllExpenses = async(req,res) =>{
    const expenses = await Expense.find()
                            .populate("category")
                            .populate("user")
    return res.status(200).json(expenses)
}


module.exports.getExpenseById = async(req,res) =>{
    const {id} = req.params
    
    Expense.findOne({_id:id})
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


module.exports.addExpense = async(req,res)=>{
    const {name,description,category,amount,user} = req.body

    const newExpense = new Expense({
        name:name.toLowerCase(),
        description : description,
        category:category,
        amount:amount,
        user:user
    })

    newExpense.save().then(
        ()=>{
            return res.status(200).json({"msg":"expense Added"})
        }
    ).catch(
        (err)=>{
            return res.status(404).json({"msg":err.message})
        }
    )
}


module.exports.deleteExpense = (req,res) =>{
    Expense.deleteOne({_id: req.params.id})
        .then(
            ()=>{
                return res.status(200).json({"msg":"expense is deleted"})
            }
        )
        .catch(
            (err)=>{
                return res.status(404).json({"msg":err.message})
            }
        )
}




module.exports.deleteAll = (req,res)=>{
    Expense.deleteMany()
        .then(
            ()=>{
                return res.status(200).json({"msg":"all expenses are deleted!"})
            }
        )
        .catch(
            (err)=>{
                return res.status(404).json({"msg":err.message})
            }
        )
}


module.exports.getUserExpenses = (req,res) =>{
    const {user} = req.params
    Expense.find({user:user})
        .then(
            (data) =>{
                return res.status(200).json(data)
            }
        )
        .catch(
            (err) =>{
                return res.status(404).json({"msg":err.message})
            }
        )
}


module.exports.totalamount = async(req,res)=>{
    const {user} = req.params
    const totalExpenses = await Expense.find({user:user})
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
    const TodayExpense = await Expense.find({date :new Date().toLocaleDateString(), user:user})
    return res.status(200).json(TodayExpense)

}

