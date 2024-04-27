import { Repository } from "../../shared/adapters/repository.adapter.js";
import { User } from "../entities/user.entity.js";

export class UserRepository extends Repository {
  constructor() {
    super(User);
  }
}
