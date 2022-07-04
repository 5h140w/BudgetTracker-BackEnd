const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const nodeMailer = require("nodemailer")

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
                var transport = nodemailer.createTransport({
                    host: "smtp.mailtrap.io",
                    port: 2525,
                    auth: {
                        user: "3f5374a5447b95",
                        pass: "ccaaf6d1c87712"
                    }
                });
                let mailOptions = {
                    from: '5h140w23@gmail.com',
                    to: email,
                    subject: `The subject goes here`,
                    html: `The body of the email goes here in HTML`,
                };

                transport.sendMail(mailOptions, (info , err)=>{
                    if (err) console.log(err)
                        else console.log(info) 
                    
                })

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