const express = require("express");
const mysql = require("mysql2")
const router = express.Router();

module.exports = (connection) => {
    router.patch("/editProfile/:userId", async (req, res) => {
        const userId = req.params.userId;
        const update = req.body;
        console.log(update);

        const sqlUpdate = mysql.format("UPDATE user SET username = ?, email = ?, bio = ? WHERE userId = ?", [update.username, update.email, update.bio, userId]);
        console.log(sqlUpdate);
        const { err, results } = connection.query(sqlUpdate)

        if (err) {
            console.log(err);
            res.json({
                success: false,
                data: null,
                error: err.message,
            });
        } else {
            console.log(`User ${userId} updated successfully`);
            res.json({
                success: true,
                data: results,
            });
        }


    }
    );
    return router;
}
    // const { username, email, bio } = req.body;
//     try {
//         // Retrieve the user from the database based on the userId
//         const result = await connection.query("SELECT * FROM user WHERE userId = ?", [userId]);

//         // Check if the user exists
//         if (result.length === 0) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         // Update the user information
//         else {
//             await connection.query("UPDATE user SET username = ?, email = ?, bio = ? WHERE userId = ?", [username, email, bio, userId]);
//             res.json({ message: "User information updated successfully" });
//         }
//     } catch (error) {
//         console.error("Error updating user information:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });
