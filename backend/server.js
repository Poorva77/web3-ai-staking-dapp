const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stakeRoutes = require("./routes/stakeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stake", stakeRoutes);

/* app.listen(5000, () => {
    console.log("Backend running on port 5000");
}); */

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.listen(PORT, () => {

    console.log(
        `Backend running on port ${PORT}`
    );

});