const express = require('express')
const app = express()
// routes
const profile = require('./src/routes/profile')
const user = require('./src/routes/user')
// middlewares
const auth = require('./src/middlewares/auth')
const logger = require('./src/middlewares/logger')

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'development') {
  app.use(logger)
}
app.use('/user', user)
app.use('/profile', auth, profile)

app
  .get('/', (req, res) => res.send('Hello GET!'))
  .post('/', (req, res) => res.send('Hello POST!'))
  .put('/', (req, res) => res.send('Hello PUT!'))
  .delete('/', (req, res) => res.send('Hello DELETE!'))

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))
