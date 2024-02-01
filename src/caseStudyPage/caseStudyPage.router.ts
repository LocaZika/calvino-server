import { Router } from "express";
import { caseStudyPageController } from "./caseStudyPage.controller";

const router = Router();
// GET caseStudyPage
router.get('/', caseStudyPageController.index);
// POST caseStudyPage
router.post('/', caseStudyPageController.post);
// PATCH caseStudyPage
router.post('/', caseStudyPageController.patch);
// REMOVE caseStudyPage
router.delete('/', caseStudyPageController.remove);

export const caseStudyPageRouter = router;
