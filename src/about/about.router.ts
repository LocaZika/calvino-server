import { Router } from "express";
import { aboutController } from "./about.controller";

const router = Router();
// GET about
router.get('/', aboutController.index);
// POST about
router.post('/', aboutController.post);
// PATCH about
router.post('/', aboutController.patch);
// REMOVE about
router.delete('/', aboutController.remove);

export const aboutRouter = router;
