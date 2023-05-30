import { getLogger } from "log4js";
import ServiceInterface from "@/service/contracts/ServiceInterface";
import { getRepository } from "typeorm";

export default class Service implements ServiceInterface {
  public logger = getLogger();
  public repository;

  constructor(repository = undefined) {
    if (repository) {
      this.repository = getRepository(repository);
    }
  }
}
