const express = require('express')
const router = express.Router()

const RESPONSE_UNAUTHORIZED = {
  code: 401,
  error: 'Unauthorized',
}

router.use((req, res, next) => {
  if (!req.headers['x-auth'] || req.headers['x-auth'] !== 'demo') {
    return res.status(RESPONSE_UNAUTHORIZED.code).json(RESPONSE_UNAUTHORIZED)
  }
  next()
})

module.exports = router
