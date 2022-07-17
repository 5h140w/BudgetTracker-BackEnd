const Deposit = require("../models/transaction")

module.exports.getDepositsByUser = async(req,res) =>{
    const{user} = req.params
    const deposits = await Deposit.find({user:user,type:"deposit"})
    
    return res.status(200).json({"data":deposits})
}

module.exports.getDepositByID = async(req,res) =>{
    const {id} = req.params
    const deposit = await Deposit.findOne({_id:id})

    return res.status(200).json({"data":deposit})
}


