const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const login = require("./route/login");
const authMiddleware = require("./middleware/auth.middleware");
const connection = mysql.createConnection({
  host: "db.cshack.site",
  user: "group08",
  port: "3306",
  password: "203226264",
  database: "group08",
});
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const loginRoute = require("./route/login")(connection, "somesecretkey");
const registerRoute = require("./route/register")(connection);
const userRoute = require("./route/user")(connection);
const editProfileRoute = require("./route/editProfile")(connection);
const favouriteRoute = require("./route/favourite")(connection);
const addFavRoute = require("./route/addFav")(connection);
const getLottoRoute = require("./route/getLotto")(connection);
const deleteFavRoute = require("./route/deleteFav")(connection);

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL database = ", err);
    return;
  }
  console.log("MySQL successfully connected!");
});
app.post("/login", loginRoute);
app.post("/register", registerRoute);
app.get("/user/:userId", userRoute);
app.patch("/editProfile/:userId", editProfileRoute);
app.get("/fav/:userId", favouriteRoute);
app.post("/addFav", addFavRoute);
app.get("/lotto/:lottoId", getLottoRoute);
app.delete("/deleteFav/:userId/:lottoId", deleteFavRoute);

app.listen(8888, () => {
  console.log("Yey, your server is running on port 8888");
});
