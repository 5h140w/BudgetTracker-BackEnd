const {Router} = require("express")
const DepositController = require("../controllers/depositController")

const router = Router()

router.get("/:id", DepositController.getDepositByID)
router.get("/user/:user",DepositController.getDepositsByUser)
router.post("/",DepositController.addDeposit)
router.delete("/user/:user", DepositController.deleteAllDeposits)
router.delete("/user/:user/:id", DepositController.deleteDepositByid)

module.exports = router