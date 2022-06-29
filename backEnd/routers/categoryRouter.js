const {Router} = require("express")
const categoryController = require("../controllers/categoryController")

const router = Router()


router.get("/all", categoryController.getAllCategories)
router.post("/",categoryController.addCategory)
router.put("/:id", categoryController.modifyCategory)

module.exports = router