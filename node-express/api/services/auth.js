const jwt = require("jsonwebtoken");

const JWT_SECRET = 'VERY_SECRET_KEY';

const JWT_OPTIONS = {
  algorithm: "HS256",
  expiresIn: 86400 // expires in 24 hours
};

const authService = {
  expiredError: jwt.TokenExpiredError,
  generateToken: payload => jwt.sign(payload, JWT_SECRET, JWT_OPTIONS),
  verifyToken: token => jwt.verify(token, JWT_SECRET, JWT_OPTIONS),
}

module.exports = authService;
