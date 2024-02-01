import { Request, Response } from 'express';
import { serviceModel } from './service.model';

export const serviceController = {
  index: async (req: Request, res: Response) => {
    const service = serviceModel.find().exec();
    res.json(service);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const service = serviceModel.create({  });
    res.json(service);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const service = await serviceModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(service);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const service = await serviceModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
