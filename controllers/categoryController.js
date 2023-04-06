const Category = require("../models/category");

module.exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(404).json({ msg: err });
  }
};

module.exports.getCategoryById = async (req, res) => {
  const { id } = req.params;

  const cat = await Category.findOne({ _id: id });
  if (!cat) return res.status(404).json({ msg: "Nonexistent category" });

  return res.status(200).json(cat);
};

module.exports.getExpenseCategories = async (req, res) => {
  const expenseCategories = await Category.find({ type: "expense" });

  return res.status(200).json(expenseCategories);
};

module.exports.getDepositCategories = async (req, res) => {
  const depositCategories = await Category.find({ type: "deposit" });
  return res.status(200).json(depositCategories);
};

module.exports.addCategory = async (req, res) => {
  const { name, description, type } = req.body;

  const cat = await Category.findOne({ name: name.toLowerCase() });
  if (cat) return res.status(404).json({ msg: "name should be unique" });

  const newCategory = new Category({
    name: name.toLowerCase(),
    description: description,
    type: type,
  });

  newCategory
    .save()
    .then(() => {
      return res.status(200).json({ msg: "category added successfully!" });
    })
    .catch((err) => {
      return res.status(404).json({ msg: err.message });
    });
};

module.exports.modifyCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, type } = req.body;

  const updatedCategory = await Category.findByIdAndUpdate(
    { _id: id },
    { name, description, type }
  );
  if (!updatedCategory) {
    return res.status(404).json({ msg: "Nonexistent Category" });
  }
  return res.status(200).json({ msg: "updated!" });
};

module.exports.deleteAll = (req, res) => {
  Category.deleteMany()
    .then(() => {
      return res.status(200).json({ msg: "all categories are deleted!" });
    })
    .catch((err) => {
      return res.status(404).json({ msg: err.message });
    });
};

module.exports.deleteById = (req, res) => {
  Category.deleteOne({ _id: req.params.id })
    .then(() => {
      return res.status(200).json({ msg: "category is deleted" });
    })
    .catch((err) => {
      return res.status(404).json({ msg: err.message });
    });
};
