const {Router} = require("express")
const transactionRouter = require("../controllers/transactionController")

const router = Router()

router.get("/",transactionRouter.getAllTransactions)
router.get("/previous",transactionRouter.getlast5transactions)

module.exports = router