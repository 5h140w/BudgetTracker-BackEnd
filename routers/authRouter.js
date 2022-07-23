const {Router} = require("express")
const userCOntroller = require("../controllers/userController")

const router = Router()

router.post("/login", userCOntroller.login)
router.post("/register", userCOntroller.register)

module.exports = router