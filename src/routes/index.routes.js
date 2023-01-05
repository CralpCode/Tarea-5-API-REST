import { Router } from "express"
import { ping, welcome } from "../controllers/index.controller.js";

const router = Router()

router.get('/', welcome )
router.get('/ping', ping )

export default router;