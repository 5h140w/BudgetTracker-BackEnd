const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const nodeMailer = require("nodemailer")

const { CourierClient } = require("@trycourier/courier");


module.exports.login = async(req,res) =>{
    const {email,password} = req.body
    const loginUser = await User.findOne({email:email.toLowerCase()})
    if(!loginUser) return res.status(404).json({"msg":"not account"})
    const comparedPwd = bcrypt.compareSync(password, loginUser.password)
    if(comparedPwd){
        let token = jwt.sign(
            {user_id : loginUser.id},
            ".....",
            {expiresIn:"2h"}
        )
        return res.status(200).json({"token":token})
    }
    return res.status(404).json({"msg":"Invalid credentials!"})
}



module.exports.register = async(req,res)=>{
    const {email,username,password} = req.body
    const existedUser = await User.find({ $or :[ {email: email.toLowerCase()},{ username:username}]})

    if(existedUser.length !== 0) return res.status(404).json({"msg":"email or username already existed!"})
    const newUser = new User({
        username : username.toLowerCase(),
        email : email.toLowerCase(),
        password: bcrypt.hashSync(password,10)
    })

    newUser.save()
        .then(
            (data)=> {
                const courier = CourierClient({ authorizationToken: "pk_prod_EA07M5YCKF4QX9PRT8SCQAN9EN0Z" });
                courier.send({
                    message: {
                        to: {
                        email: "23che.di@gmail.com",
                        },
                        template: "2V5P4XB78FMXTTJPZTZ554RDF0TG",
                        data: {
                        },
                    },
                })
                    .then((resp) => {
                        console.log('Email sent, Email Id: ', resp.requestId)
                    })
                    .catch((error) => {
                        console.error(error)
                });


                let token= jwt.sign(
                    {user_id:data._id},
                    ".....",
                    {expiresIn:"2h"}
                )
                return res.status(200).json({"msg":"Welcome!","token":token})
            }
        ).catch(
            (err)=>{
                return res.status(404).json({"msg":err.message})
            }
        )
}

module.exports.getAllUsers = async (req,res)=>{
    const allusers = await User.find()

    return res.status(200).json(allusers)
    
}

module.exports.getUserById = async(req,res)=>{
    const user = User.findById(req.params.id)
    if(!user) return res.status(404).json({"msg":"Nonexistent user"})

    return res.status(200).json(user)
}

module.exports.changeData = async(req,res) =>{
    const {id} = req.params
    const {email,username} = req.body

    const newUser = await User.findByIdAndUpdate(id , {email,username})
    if(!newUser){
        return res.status(404).json({"msg":"Nonexistent user"})
    }
    return res.status(200).json({"msg":"updated"})

}