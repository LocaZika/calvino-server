import { Request, Response } from 'express';
import { headerModel } from './header.model';

export const headerController = {
  index: async (req: Request, res: Response) => {
    const header = headerModel.find().exec();
    res.json(header);
  },
  post: async (req: Request, res: Response) => {
    const { navbar, callUs, contact }: THeader = req.body;
    const header = headerModel.create({ navbar, callUs, contact });
    res.json(header);
  },
}