import { Router } from "express";

//Import controllers for aplication
import PermissionController from "./controllers/PermissionController";
import ProductController from "./controllers/ProductController";
import RoleController from "./controllers/RoleController";
import SessionController from "./controllers/SessionController";
import UserController from "./controllers/UserController";
import { is } from "./middlewares/permission";

const routes = Router();

// Usuários
routes.post("/users", UserController.store);

// Auth
routes.post("/sessions", SessionController.auth);

// Produtos
routes.post("/products", is(["ESTOQUE"]) ,ProductController.store);
routes.get("/products", is(["ESTOQUE", "VISUALIZAR"]) , ProductController.index);

// Permissões
routes.post("/permissions", PermissionController.store);
routes.get("/permissions", PermissionController.index);

// Roles
routes.post("/roles", RoleController.store);

export { routes };
