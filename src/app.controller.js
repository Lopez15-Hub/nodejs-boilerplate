import { Controller } from "./modules/shared/adapters/controller.adapter.js";


export class AppController extends Controller {
  helloWorld = (_, res) =>
    res.json({
      success: true,
      message: "Welcome to the api boilerplate!",
    });
}
