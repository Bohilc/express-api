import { User } from "@/entity/User";
import UserService from "@/service/UserService";
import { Injectable } from "@/Injectable";
import Controller from "@/controller/contracts/Controller";
import { Get, Path, Route, Tags, Body, Post, Delete, Patch, Put } from "tsoa";
import { Query } from "@tsoa/runtime/dist/decorators/parameter";
require("dotenv").config();
const { exec } = require("child_process");

@Tags("User")
@Route("/api/v1/users")
@Injectable()
export class UserController extends Controller {
  constructor(private userService: UserService) {
    super(User);
  }

  /**
   * Retrieves the details of an existing user.
   */
  @Get("/")
  async all(): Promise<Array<User>> {
    return [];
    // return this.repository.find();
  }

  /**
   * Retrieves the details of an existing user.
   */
  @Get("/test")
  async testCypress(): Promise<Array<User>> {
    const response = []
    exec("ls -la", (error, stdout, stderr) => {
      if (error) {
        response.push(error)
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        response.push(stderr)
        console.log(`stderr: ${stderr}`);
        return;
      }
      response.push(stdout)
      console.log(`stdout: ${stdout}`);
    });
    return response;
    // return this.repository.find();
  }

  /**
   * Get one user
   * @param { string } id
   * @param { string } q
   */
  @Get("/:id")
  async one(@Path() id, @Query() q?) {
    return [id, q];
  }

  /**
   * Create new user.
   * @param { User } user
   */
  @Post("/")
  async create(@Body() user: User): Promise<User> {
    return user;
    // return this.userService.createNewUser(user);
  }

  /**
   * Update user.
   * @param { User } user
   * @return { any } promise
   */
  @Patch("/")
  update(@Body() user: User): Promise<any> {
    return Promise.resolve(undefined);
  }

  /**
   * Update or create user.
   * @param { number } id
   * @return { any } promise
   */
  @Put("/:id")
  updateOrCreate(@Path() id): Promise<any> {
    return Promise.resolve(undefined);
  }

  /**
   * Delete user by id
   * @param { number } id
   * @return { any } promise
   */
  @Delete("/:id")
  remove(@Path() id): Promise<any> {
    return Promise.resolve(undefined);
  }
}
