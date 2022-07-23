const {Router} = require("express")
const categoryController = require("../controllers/categoryController")
const router = Router()

router.get("/all", categoryController.getAllCategories)
router.get("/expense", categoryController.getExpenseCategories)
router.get("/deposit", categoryController.getDepositCategories)
router.get("/:id",categoryController.getCategoryById)
router.post("/",categoryController.addCategory)
router.put("/:id", categoryController.modifyCategory)
router.delete("/", categoryController.deleteAll)
router.delete("/:id",categoryController.deleteById)


module.exports = router