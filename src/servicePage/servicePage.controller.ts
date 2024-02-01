import { Request, Response } from 'express';
import { servicePageModel } from './servicePage.model';

export const servicePageController = {
  index: async (req: Request, res: Response) => {
    const servicePage = servicePageModel.find().exec();
    res.json(servicePage);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const servicePage = servicePageModel.create({  });
    res.json(servicePage);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const servicePage = await servicePageModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(servicePage);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const servicePage = await servicePageModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
