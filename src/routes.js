import { Router } from "express";
import Usercontrollers from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();

routes.post('/user', Usercontrollers.store)
routes.post('/session', SessionController.store)


export default routes;


