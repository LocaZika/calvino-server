import { Router } from "express";
import { pricingPlanController } from "./pricingPlan.controller";

const router = Router();
// GET pricingPlan
router.get('/', pricingPlanController.index);
// POST pricingPlan
router.post('/', pricingPlanController.post);
// PATCH pricingPlan
router.post('/', pricingPlanController.patch);
// REMOVE pricingPlan
router.delete('/', pricingPlanController.remove);

export const pricingPlanRouter = router;
