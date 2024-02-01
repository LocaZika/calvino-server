import { Request, Response } from 'express';
import { brandModel } from './brand.model';

export const brandController = {
  index: async (req: Request, res: Response) => {
    const brand = brandModel.find().exec();
    res.json(brand);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const brand = brandModel.create({  });
    res.json(brand);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const brand = await brandModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(brand);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const brand = await brandModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
