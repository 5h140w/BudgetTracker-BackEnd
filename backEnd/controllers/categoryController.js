const Category = require("../models/category")


module.exports.getAllCategories = async(req,res) =>{
    const categories = await Category.find()
    return res.status(200).json(categories)
}