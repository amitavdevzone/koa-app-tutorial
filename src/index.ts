import Koa from 'koa'
import dotenv from 'dotenv'

import ApiRoutes from './config/routes'

dotenv.config()
const app = new Koa()
ApiRoutes.init(app)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
