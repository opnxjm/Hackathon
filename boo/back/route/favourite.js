const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.get("/fav/:userId", async(req, res) => {
        const userId = req.params.userId;
        console.log(userId);
        connection.query("SELECT * FROM userLotto WHERE user_id = ?", [userId], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error retrieving user id");
              } else if (result.length === 0) {
                res.status(404).send("User not found");
              } else {
                res.json({
                  success: true,
                  message: "Found",
                  user: result,
                });
              }
        });
    })
    return router;
};