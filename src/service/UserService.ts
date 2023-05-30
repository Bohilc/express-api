import { Injectable } from "@/Injectable";
import Service from "@/service/contracts/Service";
import { User } from "@/entity/User";

@Injectable()
export default class UserService extends Service {
  constructor() {
    super(User);
  }

  createNewUser(newUser: User): User {
    // ...
    return newUser;
  }

  find() {
    return this.repository.find();
  }
}
