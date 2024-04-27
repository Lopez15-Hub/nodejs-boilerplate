import { Service } from "../../shared/adapters/service.adapter.js";
import { UserRepository } from "../repository/users.repository.js";

export class UsersService extends Service {
  constructor() {
    super(new UserRepository());
  }
  getHello = () => ({
    success: true,
    message: "Users",
  });
  getUsers = async () => await this.repository.findAll();
}
