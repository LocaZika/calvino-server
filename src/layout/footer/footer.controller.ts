import { Request, Response } from "express";
import { footerModel } from "./footer.model";

export const footerController = {
  index: async (req: Request, res: Response) => {
    const footer = footerModel.find().exec();
    res.json(footer);
  },
  post: async (req: Request, res: Response) => {
    const { logo, description, captions } = req.body;
    const footer = footerModel.create({ logo, description, captions });
    res.json(footer);
  }
}