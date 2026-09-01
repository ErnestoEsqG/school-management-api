"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const professorsController_1 = __importDefault(require("../controllers/professorsController"));
const router = express_1.default.Router();
router.get('/', professorsController_1.default.consult);
router.post('/', professorsController_1.default.input);
router.route("/:id")
    .get(professorsController_1.default.consultDetail)
    .put(professorsController_1.default.update)
    .delete(professorsController_1.default.delete);
exports.default = router;
