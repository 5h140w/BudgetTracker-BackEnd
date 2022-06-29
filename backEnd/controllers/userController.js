const {User} = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.login = async(req,res) =>{
    const {email,password} = req.body
    const loginUser = await User.findOne({email:email.toLowerCase()})
    if(!loginUser) return res.status(404).json({"msg":"not account"})
    const comparedPwd = bcrypt.compareSync(password, loginUser.password)
    if(comparedPwd){
        let token = jwt.sign(
            {user_id : user.id},
            ".....",
            {expiresIn:"2h"}
        )
        return res.status(200).json({"token":token})
    }
    return res.status(404).json({"msg":"Invalid credentials!"})
}



module.exports.register = async(req,res)=>{
    const {email,username,password} = req.body
    const existedUser = await User.find({ $or :[ {email: email.toLowerCase},{ username:username}]})
    if(existedUser.length !== 0) return res.status(404).json({"msg":"email or username already existed!"})
    const newUser = new User({
        username : username.toLowerCase(),
        email : email.toLowerCase(),
        password: bcrypt.hashSync(password,10)
    })

    newUser.save()
        .then(
            (data)=> {
                let token= jwt.sign(
                    {user_id:data._id},
                    ".....",
                    {expiresIn:"2h"}
                )
                return res.status(200).json({"msg":"Welcome!","token":token})
            }
        ).catch(
            (err)=>{
                return res.status(404).jsohn({"msg":err.message})
            }
        )
}


module.exports.changeData = async(req,res) =>{
    const {id,email,username} = req.body

    const newUser = await User.findByIdAndUpdate(id , {email,username})
    if(!newUser){
        return res.status(404).json({"msg":"Inexistant user"})
    }
    return res.status(200).json({"msg":"updated"})

}