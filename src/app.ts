import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./route/routes";
import { Injector } from "@/Injectable";
import { getLogger } from "log4js";
import morgan from "morgan";
import dbConfig from "@/config/database";

require("dotenv").config();

const PORT = process.env.PORT;
const swaggerUi = require("swagger-ui-express");
const logger = getLogger();

const app: Application = express();
app.use(express.static("public"));
// morgan
app.use(morgan("tiny"));
// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// cors
const allowedOrigins = [process.env.HOST];
const cors = require("cors");
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // logger.debug("Request Origin=" + origin)
      // logger.debug("Allowed origins: " + allowedOrigins)
      if (!origin) {
        return callback(null, true);
      }
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
// swagger
app.use(
  `/docs`,
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

function getParams(reqParams, params) {
  if (!params) return [];
  return params.reduce(function (previousValue, param) {
    previousValue.push(reqParams[param.replace(":", "")]);
    return previousValue;
  }, []);
}

function getQueries(reqQueries) {
  return Object.values(reqQueries);
}

createConnection(dbConfig)
  .then(async (connection) => {
    // create express app

    // register express routes from defined application routes
    Routes.forEach((route) => {
      app[route.method](
        // @ts-ignore
        route.route.url,
        (req: Request, res: Response, next: Function) => {
          // @ts-ignore
          const result = Injector.resolve(route.controller, connection)[
            // @ts-ignore
            route.action
          ](
            ...getParams(req.params, route.route["params"]),
            ...getQueries(req.query),
            req.body
          );
          // const result = route.controller[route.action](req, res, next);
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    app.listen(PORT, () => {
      logger.info("server started at:", `http://localhost:${PORT}/docs/`);
    });
  })
  .catch((error) => {
    logger.info(`Error: `, `${error.message}`)
    });
