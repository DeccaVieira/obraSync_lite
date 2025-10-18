import { Router } from "express";
import manager_controller from "../controllers/manager_controller.js"
import { validateBody } from "../middlewares/validate_schema.js";
import { manager_schema } from "../schemas/manager_schema.js";
const manager_router = Router();

manager_router.post("/add-manager",validateBody(manager_schema), manager_controller.add_manager);

export default manager_router;