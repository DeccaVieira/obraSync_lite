import { Router } from "express";
import manager_router from "./manager_router.js";

const router = Router();

router.use(manager_router);

export default router;