import { Router } from "express";
import { chooseUsController } from "./chooseUs.controller";

const router = Router();
// GET chooseUs
router.get('/', chooseUsController.index);
// POST chooseUs
router.post('/', chooseUsController.post);
// PATCH chooseUs
router.post('/', chooseUsController.patch);
// REMOVE chooseUs
router.delete('/', chooseUsController.remove);

export const chooseUsRouter = router;
