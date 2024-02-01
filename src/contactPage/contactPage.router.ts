import { Router } from "express";
import { contactPageController } from "./contactPage.controller";

const router = Router();
// GET contactPage
router.get('/', contactPageController.index);
// POST contactPage
router.post('/', contactPageController.post);
// PATCH contactPage
router.post('/', contactPageController.patch);
// REMOVE contactPage
router.delete('/', contactPageController.remove);

export const contactPageRouter = router;
