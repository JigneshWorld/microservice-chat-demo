import { DataSource } from "typeorm";
import config from "config";

export const AppDataSource = new DataSource({
  migrationsTableName: "migrations",
  type: "mysql",
  url: <string>config.get("USERS_SERVICE_DB_URL"),
  logging: true,
  synchronize: true,
  entities: ["src/db/entities/*.ts"],
  migrations: ["src/db/migrations/*.ts"],
});
