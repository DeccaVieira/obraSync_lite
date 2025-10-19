import customer_controller from "../controllers/customer_controller.js";
import { Router } from "express";
import {customer_schema} from "../schemas/customer_schema.js"
import { validateBody } from "../middlewares/validate_schema.js";

const customer_router = Router();

customer_router.post("/add-customer/:manager_id",validateBody(customer_schema), customer_controller.add_customer);
customer_router.get("/get-customers/:manager_id", customer_controller.get_customer_by_manager)

export default customer_router;