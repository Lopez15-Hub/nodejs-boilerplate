
import { Route } from "../../shared/adapters/route.adapter.js";
import { UsersController } from "../controllers/users.controller.js";

export class UsersRoutes extends Route {
  constructor() {
    super("/users", new UsersController());
  }
  registerRoutes() {
    this.get("/", this.controller.helloWorld);
    this.get("/get-users", this.controller.getUsers);
  }
}
