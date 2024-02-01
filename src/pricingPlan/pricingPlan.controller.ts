import { Request, Response } from 'express';
import { pricingPlanModel } from './pricingPlan.model';

export const pricingPlanController = {
  index: async (req: Request, res: Response) => {
    const pricingPlan = pricingPlanModel.find().exec();
    res.json(pricingPlan);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const pricingPlan = pricingPlanModel.create({  });
    res.json(pricingPlan);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const pricingPlan = await pricingPlanModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(pricingPlan);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const pricingPlan = await pricingPlanModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
