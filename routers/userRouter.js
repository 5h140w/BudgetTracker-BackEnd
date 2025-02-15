const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.get("/all", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/changeData/:id", userController.changeData);

module.exports = router;
