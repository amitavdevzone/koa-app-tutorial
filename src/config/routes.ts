import KoaRouter from 'koa-router'
import HomeController from '../controllers/HomeController'
import LoginController from '../controllers/LoginController'

class ApiRoutes {
  static init(app) {
    const router = new KoaRouter()
    this.addRoutes(router)
    app.use(router.routes())
  }

  static addRoutes(router) {
    router.get('/', HomeController.index)
    router.get('/login', LoginController.index)
  }
}

export default ApiRoutes
