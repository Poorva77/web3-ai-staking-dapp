const express = require("express");
const router = express.Router();

const { stakeAmount } = require("../controllers/stakeController");

router.post("/stake", stakeAmount);

module.exports = router;