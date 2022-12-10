const Transaction = require("../models/transaction")


module.exports.getAllTransactions = async(req,res) =>{
    const trx = await Transaction.find()
                            .populate("category")
                            .populate("user")
    return res.status(200).json(trx)
}


module.exports.getlast5transactions = async(req,res) =>{
    const trx = await Transaction.find()
                            .populate("category")
                            .populate("user")
                            .limit(5)
                            .sort({createdAt: 'desc'})
    return res.status(200).json(trx)
}


module.exports.getAllExpenses = async(req,res)=>{
    const expenses = await Transaction.find({type:"expense"})
                                .populate("category")
                                .populate("user")
    return res.status(200).json(expenses)
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




module.exports.getbalance = async (req , res ) =>{
    const {user} = req.params
    let balance =0
    const trx = await Transaction.find({user: user})

    trx.forEach(element => {
        element.type === "expense" ? balance -= element.amount : balance += element.amount 
    });

    return res.status(200).json(balance)

}