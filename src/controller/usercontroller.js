
const express = require("express");
const User = require("../model/usermodel");
const route = express.Router();




route.post("/signup", async (req, res) => {

    try {

        console.log(req.body)

        let existinguser = await User.findOne({ email: req.body.email }).lean().exec();
        console.log(existinguser, "user")
        if (existinguser)
            return res.status(409).send({ message: "ALready user exist kindly login" })

        let user = await User.create(req.body);
        return res.send({ user })
    }
    catch (err) {

        console.log(err)
        return res.send(err)

    }
})

route.post("/login", async (req, res) => {

    try {
        if (req.body.token) {




            let user = decoded.user;


            return res.send({ user })
        }

        if (!req.body.email) {
            return res.status(404).send("kindly enter email")
        }
        console.log(req.body)
        let user = await User.findOne({ email: req.body.email }).lean().exec();
        console.log(user)


        if (!user) {
            return res.status(404).send("no user kindly regeister first")
        }

        console.log(user)
        if (user.password != req.body.password) {
            return res.status(401).send("password not match")
        }

        return res.send({ user })

    }
    catch (err) {

        return res.send(err)

    }
})

module.exports = route