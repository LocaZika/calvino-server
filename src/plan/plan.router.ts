import { Router } from "express";
import { planController } from "./plan.controller";

const router = Router();
// GET plan
router.get('/', planController.index);
// POST plan
router.post('/', planController.post);
// PATCH plan
router.post('/', planController.patch);
// REMOVE plan
router.delete('/', planController.remove);

export const planRouter = router;
