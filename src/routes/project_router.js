import { Router } from "express";
import project_controller from "../controllers/project_controller.js";

const project_router = Router();

project_router.post("/add-project/:manager_id/:customer_id", project_controller.add_project_by_customer);
project_router.get("/get-project-by-customer/:customer_id/:manager_id", project_controller.get_project_by_customer);
project_router.get("/get-project-by-manager/:manager_id", project_controller.get_project_by_manager);

export default project_router;