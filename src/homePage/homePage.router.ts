import { Router } from "express";
import { homePageController } from "./homePage.controller";

const router = Router();
// GET homePage
router.get('/', homePageController.index);
// POST homePage
router.post('/', homePageController.post);
// PATCH homePage
router.post('/', homePageController.patch);
// REMOVE homePage
router.delete('/', homePageController.remove);

export const homePageRouter = router;
