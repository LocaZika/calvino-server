import { Router } from "express";
import { footerController } from "./footer.controller";

const router = Router();
router.get('/', footerController.index);
router.post('/', footerController.post);
export const footerRouter = router;