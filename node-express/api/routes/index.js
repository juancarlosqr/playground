const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.json({status: 'OK'});
});

module.exports = router;
