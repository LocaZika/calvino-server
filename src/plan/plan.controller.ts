import { Request, Response } from 'express';
import { planModel } from './plan.model';

export const planController = {
  index: async (req: Request, res: Response) => {
    const plan = planModel.find().exec();
    res.json(plan);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const plan = planModel.create({  });
    res.json(plan);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const plan = await planModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(plan);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const plan = await planModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
