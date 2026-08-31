import { DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3000,
    username: "root",
    password: "neto44x",
    database: "courses",
    synchronize: true,
    logging: true,
    entities: []

});