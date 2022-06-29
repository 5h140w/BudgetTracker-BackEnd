const {Router} = require("express")
const expenseController = require("../controllers/expenseController")

const router = Router()

router.get("/all", expenseController.getAllExpenses)


module.exports = router