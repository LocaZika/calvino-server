import { Router } from "express";
import { aboutPageController } from "./aboutPage.controller";

const router = Router();
// GET aboutPage
router.get('/', aboutPageController.index);
// POST aboutPage
router.post('/', aboutPageController.post);
// PATCH aboutPage
router.post('/', aboutPageController.patch);
// REMOVE aboutPage
router.delete('/', aboutPageController.remove);

export const aboutPageRouter = router;
