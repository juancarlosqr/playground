const auth = require("../services/auth");

const authenticated = (req, res, next) => {
  if (typeof req.headers.authorization === "undefined") {
    return res.status(403).json({ error: "Forbidden" });
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = auth.verifyToken(token);
    const { password, ...userWithoutPassword } = user;
    req.decoded = { ...userWithoutPassword };
    return next();
  } catch (e) {
    if (e instanceof auth.expiredError) {
      return res.status(401).json({ error: "Invalid Token" })
    }
    return res.status(400).json({ error: "Bad Request" })
  }
};

module.exports = authenticated;
