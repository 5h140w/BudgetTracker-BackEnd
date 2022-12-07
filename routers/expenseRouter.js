const {Router} = require("express")
const expenseController = require("../controllers/expenseController")

const router = Router()

router.get("/:id", expenseController.getExpenseByID)
router.get("/:user/5", expenseController.getlast5Expenses)
router.get("/user/:user", expenseController.getExpensesByUser)
router.post("/",expenseController.addExpense)
router.delete("/user/:user/", expenseController.deleteAllExpense)
router.delete("/user/:user/:id", expenseController.deleteExpenseByid)

module.exports = router