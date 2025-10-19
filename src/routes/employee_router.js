import { Router } from "express";
import { validateBody } from "../middlewares/validate_schema.js";
import employee_controller from "../controllers/employee_controller.js";
import { employee_schema } from "../schemas/employee_schema.js";

const employee_router = Router();

employee_router.post("/add-employee/:manager_id", validateBody(employee_schema), employee_controller.add_employee);
employee_router.get("/employee-by-manager/:manager_id", employee_controller.get_employee_by_manager);

export default employee_router;