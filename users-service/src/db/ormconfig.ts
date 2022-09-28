import { DataSource } from "typeorm";
import config from "config";
import User from "./entity/User";

export const AppDataSource = new DataSource({
  migrationsTableName: "migrations",
  type: "mysql",
  url: <string>config.get("USERS_SERVICE_DB_URL"),
  logging: true,
  synchronize: false,
  entities: [User],
  migrations: ["src/db/migrations/*.ts"],
});
