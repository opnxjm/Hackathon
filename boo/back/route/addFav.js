const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.post("/addFav", async (req, res) => {
        const userId = req.userId;
        const lottoId = req.body.lottoId;
        connection.query(
            "INSERT INTO userLotto (user_id, lotto_id) VALUES (?, ?)", 
            [userId, lottoId],
            (err, result) => {
              if (err) {
                console.error("Error executing SQL query:", err);
                return res.status(500).json({ error: "Failed to fav" });
              }
              res.status(201).json({
                message: "fav created successfully",
                lotto: result
              });
            }
        )
    });
    return router;
};