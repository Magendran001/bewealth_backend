const express = require("express");
const connect = require("./config/db");
const app = express();
require("dotenv").config();
const usercontroller = require("./controller/usercontroller");

var cors = require('cors')
app.use(cors())

app.use(express.json())

app.use("", usercontroller)

app.listen(process.env.PORT || 5000, async (req, res, next) => {
    try {
        await connect
        console.log("listening on port 4329")
    }
    catch (err) {
        console.log(err)
    }
})