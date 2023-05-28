const express = require("express");
const router = express.Router();

module.exports = (connection) => {
  router.get("/fav/:userId", async (req, res) => {
    console.log("ตรงนี้นะ");
    const userId = req.params.userId;
    console.log(userId);
    connection.query(
      "select user_id,lotto_id, lottoNumber, meaning, event FROM userLotto INNER JOIN lotto l on userLotto.lotto_id = l.lottoId INNER JOIN user u on userLotto.user_id = u.userId WHERE user_id = ?;",
      [userId],
      (err, result) => {
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
      }
    );
  });
  return router;
};
