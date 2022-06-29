const {Router} = require("express")
const categoryController = require("../controllers/categoryController")

const router = Router()


router.get("/all", categoryController.getAllCategories)
router.get("/:id",categoryController.getCategoryById)
router.post("/",categoryController.addCategory)
router.put("/:id", categoryController.modifyCategory)

module.exports = router