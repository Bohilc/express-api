import { ConnectionOptions } from "typeorm";
require("dotenv").config();

const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.ts"],
  // entities: ['src/entity/*.ts', './build/src/entity/*.js'], // <- Here!
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};

export default config;
