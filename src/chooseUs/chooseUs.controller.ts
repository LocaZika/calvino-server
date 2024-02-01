import { Request, Response } from 'express';
import { chooseUsModel } from './chooseUs.model';

export const chooseUsController = {
  index: async (req: Request, res: Response) => {
    const chooseUs = chooseUsModel.find().exec();
    res.json(chooseUs);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const chooseUs = chooseUsModel.create({  });
    res.json(chooseUs);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const chooseUs = await chooseUsModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(chooseUs);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const chooseUs = await chooseUsModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
