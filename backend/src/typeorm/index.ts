import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "bd",
  logging: false,
  entities: ["**/entities/**/*.ts"],
  migrations: ["**/migrations/**/*.ts"],
  synchronize: false,
});
