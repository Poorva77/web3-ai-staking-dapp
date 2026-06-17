/* const express = require("express");
const router = express.Router();
const { stakeAmount } = require("../controllers/stakeController");
router.post("/stake", stakeAmount);
module.exports = router; */

const express = require("express");
const router = express.Router();
const {
    stakeAmount,
    withdrawStake,
    getStake
} = require("../controllers/stakeController");

router.post("/stake", stakeAmount);
router.post("/withdraw", withdrawStake);
router.get("/getStake", getStake);
module.exports = router;