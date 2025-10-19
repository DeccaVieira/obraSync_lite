import { Router } from "express";
import manager_router from "./manager_router.js";
import auth_router from "./auth_router.js";
import employee_router from "./employee_router.js";
import customer_router from "./customer_router.js"
import project_router from "./project_router.js";

const router = Router();

router.use(manager_router);
router.use(auth_router);
router.use(employee_router);
router.use(customer_router);
router.use(project_router);

export default router;