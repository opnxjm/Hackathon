const express = require("express");
const router = express.Router();

module.exports = (connection) => {
  router.get("/lotto/:lottoId", async (req, res) => {
    const lottoId = req.params.lottoId;
    connection.query(
      "SELECT * FROM lotto WHERE lottoId = ?",
      [lottoId],
      (err, res) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error retrieving lotto id");
        } else if (result.length === 0) {
          res.status(404).send("Lotto not found");
        } else {
          res.json({
            success: true,
            message: "Found",
            lotto: result,
          });
        }
      }
    );
  });
  return router;
};
