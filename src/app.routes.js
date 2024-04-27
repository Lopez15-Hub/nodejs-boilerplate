import { AppController } from "./app.controller.js";
import { Route } from "./modules/shared/adapters/route.adapter.js";

export class AppRoutes extends Route {
  constructor() {
    super("/", new AppController());
  }
  registerRoutes() {
    this.get("", this.controller.helloWorld);
  }
}
