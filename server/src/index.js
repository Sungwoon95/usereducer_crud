import express from 'express'
import cors from 'cors'

import contentRoute from './routes/contents.js'
import userRoute from './routes/users.js'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

const routes = [...contentRoute, ...userRoute]

routes.forEach(({method, route, handler}) =>
  app[method](route, handler)
)

app.listen(8080, () => {
  console.log("8080 port")
})