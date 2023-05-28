const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    const data = jwt.verify(token, "somesecretkey");
    const { userId } = data;
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).send();
  }
};
