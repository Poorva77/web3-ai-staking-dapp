const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stakeRoutes = require("./routes/stakeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stake", stakeRoutes);

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});