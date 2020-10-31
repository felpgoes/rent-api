import express from 'express'
import '@controllers/UsersController'

const app = express()

app.get('/', async (req, res) => res.json({
  message: 'hello world'
}))

app.listen(3333)
