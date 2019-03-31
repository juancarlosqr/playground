const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')

router
  .post('/', (req, res) => {
    res.json(profileController.helloMessage())
  })

module.exports = router
