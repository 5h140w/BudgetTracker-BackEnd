const Deposit = require("../models/transaction")

module.exports.getDepositsByUser = async(req,res) =>{
    const{user} = req.params
    const deposits = await Deposit.find({user:user,type:"deposit"})
    
    return res.status(200).json(deposits)
}

module.exports.getlast5Expenses = async(req,res) =>{
    const {user}= req.params
    const trx = await Deposit.find({user:user,type:"deposit"})
                            .populate("category")
                            .populate("user")
                            .limit(5)
                            .sort({createdAt: 'desc'})
    return res.status(200).json(trx)
}

module.exports.getDepositByID = async(req,res) =>{
    const {id} = req.params
    const deposit = await Deposit.findOne({_id:id})

    return res.status(200).json(deposit)
}

module.exports.addDeposit = (req,res) =>{
    const {name,description,category,amount,user} = req.body

    const newDeposit = new Deposit({
        name: name.toLowerCase(),
        description:description,
        category:category,
        amount:amount,
        user:user,
        date: new Date().toLocaleDateString(),
        type:"deposit"
    })

    newDeposit.save().then(
        ()=>{
            return res.status(200).json({"msg":"Deposit Added"})
        }
    ).catch(
        (err)=>{
            return res.status(404).json({"msg":err.message})
        }
    )
}


module.exports.deleteAllDeposits = (req,res)=>{
    const{user} = req.params
    Deposit.deleteMany({user:user})
        .then(
            ()=>{
                return res.status(200).json({"msg":"Deposits are deleted"})
            }
        ).catch(
            (err)=>{
                return res.status(404).json({"msg":err.message})
            }
        )
}



module.exports.deleteDepositByid = (req,res)=>{
    const {user,id} = req.params
    Deposit.deleteOne({_id:id, user:user})
        .then(
            ()=>{
                return res.status(200).json({"msg":"Deposit is deleted"})
            }
        ).catch(
            (err)=>{
                return res.status(404).json({"msg":err.message})
            }
        )
}