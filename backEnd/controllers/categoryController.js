const Category = require("../models/category")


module.exports.getAllCategories = async(req,res) =>{
    const categories = await Category.find()
    return res.status(200).json(categories)
}


module.exports.addCategory = async(req,res) =>{
    const {name, description} = req.body

    const cat= await Category.findOne({name: name.toLowerCase()})
    if(cat) return res.status(404).json({"msg":"name shoumd be unique"})

    const newCategory = new Category({
        name : name.toLowerCase(),
        description : description
    })

    newCategory.save().then(
        ()=>{
            return res.status(200).json({"msg":"category added successfully!"})
        }
    ).catch(
        (err)=>{
            return res.status(404).json({"msg":err.message})
        }
    )
}


module.exports.modifyCategory = async(req,res) =>{
    const {id} = req.params
    const {name,description} = req.body

    const updatedCategory = await Category.findByIdAndUpdate({_id: id},{name,description})
    if(!updatedCategory){
        return res.status(404).json({"msg":"Nonexistent Category"})
    }
    return res.status(200).json({"msg":"updated!"})
}