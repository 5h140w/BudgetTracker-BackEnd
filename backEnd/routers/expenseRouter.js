const {Router} = require("express")
const expenseController = require("../controllers/expenseController")

const router = Router()

router.get("/all", expenseController.getAllExpenses)
router.get("/:id", expenseController.getExpenseById)
router.get("/user/:user", expenseController.getUserExpenses)
router.get("/totalamount/:user", expenseController.totalamount)
router.get("/today/:user", expenseController.getExpenseToday)
router.get("/todayamount/:user", expenseController.todayAmount)
router.post("/",expenseController.addExpense)
router.delete("/",expenseController.deleteAll)
router.delete("/:id",expenseController.deleteExpense)



module.exports = router