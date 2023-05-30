import ControllerInterface from "@/controller/contracts/ControllerInterface";
import { getLogger } from "log4js";
import { getRepository } from "typeorm";


export default class Controller implements ControllerInterface {
  public logger = getLogger();
  public repository

  constructor(repository) {
    this.repository = getRepository(repository)
  }
}
