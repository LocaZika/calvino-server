import { Request, Response } from 'express';
import { serviceItemModel } from './serviceItem.model';

export const serviceItemController = {
  index: async (req: Request, res: Response) => {
    const serviceItem = serviceItemModel.find().exec();
    res.json(serviceItem);
  },
  post: async (req: Request, res: Response) => {
    const { title, img, content, path }: TServiceItem = req.body;
    const serviceItem = serviceItemModel.create({ title, img, content, path });
    res.json(serviceItem);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const serviceItem = await serviceItemModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(serviceItem);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const serviceItem = await serviceItemModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
