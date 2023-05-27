const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token;
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const { userId } = data;
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).send();
  }
};