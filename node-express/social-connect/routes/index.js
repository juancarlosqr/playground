const express = require('express')
const router = express.Router()
const instagramProvider = require('../providers/instagram').provider

router
  .get('/', async (req, res) => {
    if (req.session && req.session.auth) {
      const instagram = instagramProvider(req.session.auth.token)
      try {
        const userJson = await instagram.get('users/self')
        console.log('self', userJson)
        // https://www.instagram.com/developer/endpoints/users/#get_users_media_recent_self
        // const mediaJson = await instagram.get('users/self/media/recent')
        // console.log('media', mediaJson)
        // const search = await instagram.get('tags/search', { q: 'berlin' })
        // console.log(search);
        return res.render('profile', {
          provider: req.session.auth.provider,
          user: userJson.data,
        })
      } catch (err) {
        console.log('err', err)
        return res.send('Error fetching data from instagram')
      }
    } else {
      res.render('index')
    }
  })
  .get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        console.log(err)
        return res.send('Error destroying session')
      }
      res.redirect('/')
    })
  })

module.exports = router
