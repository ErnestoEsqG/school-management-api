"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const coursesController_1 = __importDefault(require("../controllers/coursesController"));
const router = express_1.default.Router();
router.get('/', coursesController_1.default.consult);
router.post('/', coursesController_1.default.input);
router.post('/registerStudent', coursesController_1.default.associateStudent);
router.route("/:id")
    .get(coursesController_1.default.consultDetail)
    .put(coursesController_1.default.update)
    .delete(coursesController_1.default.delete);
exports.default = router;
