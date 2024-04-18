import { Router } from "express";
import Usercontrollers from "./app/controllers/UserController";

const routes = new Router();

routes.post('/users', Usercontrollers.store)

export default routes;


