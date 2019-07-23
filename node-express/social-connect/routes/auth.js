const express = require('express')
const router = express.Router()
const instagramProvider = require('../providers/instagram').provider
const instagramCallback = require('../providers/instagram').callback

router
  .get('/instagram', (req, res) => {
    res.redirect(instagramProvider().getAuthorizationUrl(instagramCallback))
  })
  .get('/instagram/callback', async (req, res) => {
    // @todo: handle denied approval request (req.query.error)
    const provider = 'instagram'
    const code = req.query.code
    try {
      const json = await instagramProvider().authorizeUser(code, instagramCallback)
      req.session.auth = {
        provider,
        token: json.access_token,
      }
      req.session.save(err => {
        if (err) {
          console.log(err)
          return res.send('Error saving session')
        }
        res.redirect('/')
      })
    } catch (err) {
      console.error(err)
      res.json(err)
    }
  })

module.exports = router
