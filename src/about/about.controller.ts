import { Request, Response } from 'express';
import { aboutModel } from './about.model';

export const aboutController = {
  index: async (req: Request, res: Response) => {
    const about = aboutModel.find().exec();
    res.json(about);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const about = aboutModel.create({  });
    res.json(about);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const about = await aboutModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(about);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const about = await aboutModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
