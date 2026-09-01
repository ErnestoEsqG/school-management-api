"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentsController_1 = __importDefault(require("../controllers/studentsController"));
const router = express_1.default.Router();
router.get('/', studentsController_1.default.consult);
router.post('/', studentsController_1.default.input);
router.route("/:id")
    .get(studentsController_1.default.consultDetail)
    .put(studentsController_1.default.update)
    .delete(studentsController_1.default.delete);
exports.default = router;
