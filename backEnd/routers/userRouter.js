const {Router} = require("express")
const userController = require("../controllers/userController")

const router = Router()

router.put("/changeData/:id",userController.changeData)

module.exports = router