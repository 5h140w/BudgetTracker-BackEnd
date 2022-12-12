const Deposit = require("../models/transaction")

module.exports.getDepositsByUser = async(req,res) =>{
    const{user} = req.params
    const deposits = await Deposit.find({user:user,type:"deposit"})
                                    
    return res.status(200).json(deposits)
}

module.exports.getlast5Deposits = async(req,res) =>{
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
    const deposit = await Deposit.findOne({_id:id , type:"deposit"})
    if(deposit) return res.status(200).json(deposit)
    else return res.status(404).json({"msg": "Not found"})
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

module.exports.changDeposit = ( req,res) =>{
    const {id} = req.params
    const {name, amount, description, category} = req.body

    Deposit.updateOne({_id: id} , {
        name: name.toLowerCase(),
        amount: parseFloat(amount),
        description: description,
        category:category,
        updatedAt : new Date()
    }).then( 
        () => {
            return res.status(200).json({"msg":"Deposit updated"})
        }
    ).catch(
        (err) =>{
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


module.exports.getDepositsPerMonth = async (req,res) =>{
    const {user} = req.params
    const year = new Date().getFullYear()
    const depositsPerMonth =[]
    
    for(let i = 0 ; i< 12 ; i++){
        let fromDate = new Date(year , i , 1)
        let toDate = new Date( year, i+1 , 0)
        let x = 0
        let deposits = await Deposit.find({ user:user,type:"deposit", createdAt :{ "$gte": fromDate , "$lte":toDate}})
        
        deposits.forEach(depo => {x += depo.amount});
        depositsPerMonth.push(x)
    } 

    return res.status(200).json(depositsPerMonth)
}



module.exports.getMonthlyDeposit = async (req,res) =>{
    const {user} = req.params
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    let DepositsMonth =0
    let fromDate = new Date(year , month , 1)
    let toDate = new Date( year, month+1 , 0)
    let Deposits = await Deposit.find({ user:user,type:"deposit", createdAt :{ "$gte": fromDate , "$lte":toDate}})
    Deposits.forEach(Deposit => { DepositsMonth += Deposit.amount});
    return res.status(200).json(DepositsMonth)
}



module.exports.getbycategories = async() =>{
    const deposits = await Deposit.find({type:"deposit"})
                            .populate("category","name")
    
    console.log(deposits)

}