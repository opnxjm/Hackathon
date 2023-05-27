const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.post("/register", async (req, res) => {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const hash = await bcrypt.hash(password, 10);
        console.log(username);
        // // Check duplicate username
        // Create account
        connection.query("INSERT INTO user(username, email, password) VALUE(?,?,?)",
            [username, email, hash],
            async (err, rows) => {
                if (err) {
                    res.json({
                        status: 400,
                        message: "failed to create user"
                    })
                } else {
                    res.json({
                        "status": 201,
                        "message": "Successfully create account"
                    })
                }
            })
    });
    return router;
};