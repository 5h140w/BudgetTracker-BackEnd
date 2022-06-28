const User = require("../models/user")


module.exports.login = (req,res) =>{
    const {email,password} = req.body
    console.log(email)
}