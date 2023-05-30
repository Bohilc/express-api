import { Logger } from "log4js";

type FunctionType = () => Promise<any>;

type FunctionTypeCreate = () => Promise<void>;

export default interface ControllerInterface {
  logger: Logger;
  all?: FunctionType;
  create?: FunctionTypeCreate;
  one?: FunctionType;
  update?: FunctionType;
  updateOrCreate?: FunctionType;
  remove?: FunctionType;
}
