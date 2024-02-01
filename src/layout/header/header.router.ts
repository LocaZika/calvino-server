import { Router } from "express";
import { headerController } from "./header.controller";

const router = Router();
// GET header
router.get('/', headerController.index);
// POST header
router.post('/', headerController.post);

export const headerRouter = router;