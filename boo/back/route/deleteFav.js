const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.delete("/deleteFav/:userId/:lottoId", async (req, res) => {
        const userId = req.params.userId;
        const lottoId = req.params.lottoId;
        console.log(userId);
        connection.query("DELETE FROM userLotto WHERE lotto_id = ?", [lottoId], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error delete fav");
            } else if (result.length === 0) {
                res.status(404).send("Lotto not found");
            } else {
                res.json({
                    success: true,
                    message: "delete success",
                    lotto: result,
                });
            }
        });
    });
    return router;
};