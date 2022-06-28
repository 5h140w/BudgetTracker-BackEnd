const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: { type : String, required:true},
    email :{ type:string, required:true, unique:true}
})


module.exports.User = new mongoose.Model("user", UserSchema)