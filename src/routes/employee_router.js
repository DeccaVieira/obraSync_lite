import { Router } from "express";
import { validateBody } from "../middlewares/validate_schema.js";
import employee_controller from "../controllers/employee_controller.js";
import { employee_schema } from "../schemas/employee_schema.js";

const employee_router = Router();

employee_router.post("/add-employee", validateBody(employee_schema), employee_controller.add_employee);

export default employee_router;