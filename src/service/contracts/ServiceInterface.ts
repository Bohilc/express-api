import { Logger } from "log4js";
import { Repository } from "typeorm/repository/Repository";

export default interface ServiceInterface {
  logger: Logger;
  repository: Repository<any>;
}
