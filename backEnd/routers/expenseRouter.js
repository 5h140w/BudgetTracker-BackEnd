const {Router} = require("express")
const expenseController = require("../controllers/expenseController")

const router = Router()

router.get("/:id", expenseController.getExpenseByID)
router.get("/user/:user", expenseController.getExpensesByUser)
router.post("/",expenseController.addExpense)
router.delete("/user/:user/", expenseController.deleteAllExpense)
router.delete("/user/:user/:id", expenseController.deleteByid)

module.exports = router