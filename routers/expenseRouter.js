const {Router} = require("express")
const expenseController = require("../controllers/expenseController")

const router = Router()

router.get("/:id", expenseController.getExpenseByID)
router.get("/:user/5", expenseController.getlast5Expenses)
router.get("/user/:user", expenseController.getExpensesByUser)
router.get("/months/:user" , expenseController.getExpensesPerMonth)
router.get("/month/:user" , expenseController.getMonthlyExpense)
router.get("/category/:user" , expenseController.getbycategories)
router.get("/max/:user" , expenseController.getMax)
router.post("/",expenseController.addExpense)
router.put("/:id", expenseController.changeExpense)
router.delete("/user/:user/", expenseController.deleteAllExpense)
router.delete("/user/:user/:id", expenseController.deleteExpenseByid)


module.exports = router