import { Router } from "express";
import { servicePageController } from "./servicePage.controller";

const router = Router();
// GET servicePage
router.get('/', servicePageController.index);
// POST servicePage
router.post('/', servicePageController.post);
// PATCH servicePage
router.post('/', servicePageController.patch);
// REMOVE servicePage
router.delete('/', servicePageController.remove);

export const servicePageRouter = router;
