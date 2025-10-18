import { Router } from "express";
import auth_controller from "../controllers/auth_controller.js";
import { validateBody } from "../middlewares/validate_schema.js";
import {auth_schema} from "../schemas/auth_schema.js"

const auth_router = Router();

auth_router.post("/login",validateBody(auth_schema), auth_controller.compare_password);

export default auth_router;