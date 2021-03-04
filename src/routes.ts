import { Router } from "express";

//Import controllers for aplication
import PermissionController from "./controllers/PermissionController";
import SessionController from "./controllers/SessionController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.auth);
routes.post("/permissions", PermissionController.store);

export { routes };
