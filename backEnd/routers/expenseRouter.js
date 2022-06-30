const {Router} = require("express")
const expenseController = require("../controllers/expenseController")

const router = Router()

router.get("/all", expenseController.getAllExpenses)
router.get("/:id", expenseController.getExpenseById)
router.post("/",expenseController.addExpense)


module.exports = router