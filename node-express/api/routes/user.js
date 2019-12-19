const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authenticated');

router.get('/me', auth, (req, res) => {
  res.json(req.decoded);
});

module.exports = router;
