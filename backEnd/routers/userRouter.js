const {Router} = require("express")
const userController = require("../controllers/userController")

const router = Router()

router.put("/:id",userController.changeData)

module.exports = router