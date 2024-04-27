import { Controller } from "../../shared/adapters/controller.adapter.js";
import { UsersService } from "../services/users.service.js";

export class UsersController extends Controller {
  constructor() {
    super(new UsersService());
  }
  helloWorld = (_, res) => res.json(this.service.getHello());
  getUsers = async (_, res) =>
    res.json({
      success: true,
      users: await this.service.getUsers(),
    });
}
