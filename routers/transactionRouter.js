const { Router } = require("express");
const transactionRouter = require("../controllers/transactionController");

const router = Router();

router.get("/", transactionRouter.getAllTransactions);
router.get("/previous", transactionRouter.getlast5transactions);
router.get("/balance/:user", transactionRouter.getbalance);

module.exports = router;
