import { Router } from "express";

const routes = new Router();

routes.get("/", (request, response) => {
  return response.json({ message: "HELLO WORLDSS" });
});

export default routes;
