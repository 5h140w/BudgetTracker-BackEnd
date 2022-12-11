const Expense = require("../models/transaction")
const { copy } = require("../routers/transactionRouter")


module.exports.getExpensesByUser = async (req,res)=>{
    const {user} = req.params
    const expenses = await Expense.find({user:user,type:"expense"})

    return res.status(200).json(expenses)
}

module.exports.getExpenseByID = async (req,res)=>{
    const {id}= req.params
    const expense =await Expense.findOne({_id:id , type: "expense"})

    if(expense) return res.status(200).json(expense)
    else return res.status(404).json({"msg": "Not found"})
    
}

module.exports.getlast5Expenses = async(req,res) =>{
    const {user}= req.params
    const trx = await Expense.find({user:user,type:"expense"})
                            .populate("category")
                            .populate("user")
                            .limit(5)
                            .sort({createdAt: 'desc'})
    return res.status(200).json(trx)
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

module.exports.changeExpense = ( req,res) =>{
    const {id} = req.params
    const {name, amount, description, category} = req.body

    Expense.updateOne({_id: id} , {
        name: name.toLowerCase(),
        amount: parseFloat(amount),
        description: description,
        category:category,
        updatedAt : new Date()
    }).then( 
        () => {
            return res.status(200).json({"msg":"Expense updated"})
        }
    ).catch(
        (err) =>{
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


module.exports.getExpensesPerMonth = async (req,res) =>{
    const {user} = req.params
    const year = new Date().getFullYear()
    const expensesPerMonth =[]
    
    for(let i = 0 ; i< 12 ; i++){
        let fromDate = new Date(year , i , 1)
        let toDate = new Date( year, i+1 , 0)
        let x = 0
        let expenses = await Expense.find({ user:user,type:"expense", createdAt :{ "$gte": fromDate , "$lte":toDate}})
        
        expenses.forEach(expense => {x += expense.amount});
        expensesPerMonth.push(x)
    } 

    return res.status(200).json(expensesPerMonth)
}

module.exports.getMonthlyExpense = async (req,res) =>{
    const {user} = req.params
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    let expensesMonth =0
    let fromDate = new Date(year , month , 1)
    let toDate = new Date( year, month+1 , 0)
    console.log(toDate)
    let expenses = await Expense.find({ user:user,type:"expense", createdAt :{ "$gte": fromDate , "$lte":toDate}})
    expenses.forEach(expense => { expensesMonth += expense.amount});
    return res.status(200).json(expensesMonth)
}
