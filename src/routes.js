import { Router } from "express";
import Usercontroller from "./app/controllers/Usecontroller";

const routes = new Router();

routes.get("/users", Usercontroller.store)

export default routes;
