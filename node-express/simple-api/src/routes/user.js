const express = require('express')
const router = express.Router()

router
  .get('/', ({ url }, res) => {
    res.json({
      url
    })
  })
  .get('/url', ({ url }, res) => {
    res.json({
      url
    })
  })
  .get('/:user', ({ params }, res) => {
    res.json({
      message: `welcome ${params.user}!`,
      params
    })
  })
  .post('/', ({}, res) => {
    res
      .status(201)
      .json({
        username: 'demo',
      })
  })

module.exports = router
