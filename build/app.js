"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const studentsRoutes_1 = __importDefault(require("./routes/studentsRoutes"));
const professorsRoutes_1 = __importDefault(require("./routes/professorsRoutes"));
const coursesRoutes_1 = __importDefault(require("./routes/coursesRoutes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    console.log('Hello World!');
    res.send("Hello World!");
});
app.use("/students", studentsRoutes_1.default);
app.use("/professors", professorsRoutes_1.default);
app.use("/courses", coursesRoutes_1.default);
exports.default = app;
