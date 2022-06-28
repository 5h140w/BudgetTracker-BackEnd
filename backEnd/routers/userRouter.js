const {Router} = require("express")
const userCOntroller = require("../controllers/userController")

const router = Router()

router.post("/signup", userCOntroller.login)


module.exports = router