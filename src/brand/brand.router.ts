import { Router } from "express";
import { brandController } from "./brand.controller";

const router = Router();
// GET brand
router.get('/', brandController.index);
// POST brand
router.post('/', brandController.post);
// PATCH brand
router.post('/', brandController.patch);
// REMOVE brand
router.delete('/', brandController.remove);

export const brandRouter = router;
