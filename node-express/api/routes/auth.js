const express = require("express");
const router = express.Router();
const auth = require('../services/auth');

const users = [
  {
    id: 1,
    username: 'bob',
    password: 'bob',
    name: 'Bob Doe',
    email: 'bob@doe.com'
  },
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = auth.generateToken(user);
    const { password, ...userWithoutPassword } = user;
    return res.json({ ...userWithoutPassword, token });
  }
  res.status(404).json({ error: "User not found" });
});

module.exports = router;
