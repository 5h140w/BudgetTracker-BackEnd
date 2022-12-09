const {Router} = require("express")
const DepositController = require("../controllers/depositController")

const router = Router()

router.get("/:id", DepositController.getDepositByID)
router.get("/:user/5", DepositController.getlast5Deposits)
router.get("/user/:user",DepositController.getDepositsByUser)
router.get("/months/:user", DepositController.getDepositsPerMonth)
router.post("/",DepositController.addDeposit)
router.put("/:id", DepositController.changDeposit)
router.delete("/user/:user", DepositController.deleteAllDeposits)
router.delete("/user/:user/:id", DepositController.deleteDepositByid)

module.exports = router