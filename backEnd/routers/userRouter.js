const {Router} = require("express")
const userController = require("../controllers/userController")

const router = Router()

router.put("/changeData",userController.changeData)

module.exports = router