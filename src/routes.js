import { Router } from "express";
import Usercontrollers from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductsController from "./app/controllers/ProductsController";

const routes = new Router();

routes.post('/user', Usercontrollers.store)
routes.post('/session', SessionController.store)
routes.post('/products', ProductsController.store)



export default routes;


