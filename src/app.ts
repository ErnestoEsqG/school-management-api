import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import studentRoutes from "./routes/studentsRoutes";
import professorsRoutes from "./routes/professorsRoutes";
import coursesRoutes from "./routes/coursesRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    console.log('Hello World!');
    res.send("Hello World!");
});

app.use("/students", studentRoutes);
app.use("/professors", professorsRoutes);
app.use("/courses", coursesRoutes);

export default app;