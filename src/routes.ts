import { Router } from "express";
import SessionController from "./controllers/SessionController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.auth);

export { routes };
