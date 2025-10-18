import { Router } from "express";
import manager_router from "./manager_router.js";
import auth_router from "./auth_router.js";


const router = Router();

router.use(manager_router);
router.use(auth_router);

export default router;