import { Router } from "express";
import { serviceItemController } from "./serviceItem.controller";

const router = Router();
// GET service item
router.get('/', serviceItemController.index);
// POST service item
router.post('/', serviceItemController.post);
// PATCH service item
router.patch('/:id', serviceItemController.patch);
// REMOVE service item
router.delete('/:id', serviceItemController.remove);

export const serviceItemRouter = router;
