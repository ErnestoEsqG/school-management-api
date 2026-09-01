import app from './app';
import { AppDataSource} from "./db/connection";

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Database Connected!");
        app.listen(3000, () => {
            console.log("App listening on port 3000");
        });
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
}

main();