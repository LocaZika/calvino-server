import { Request, Response } from 'express';
import { contactPageModel } from './contactPage.model';

export const contactPageController = {
  index: async (req: Request, res: Response) => {
    const contactPage = contactPageModel.find().exec();
    res.json(contactPage);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const contactPage = contactPageModel.create({  });
    res.json(contactPage);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const contactPage = await contactPageModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(contactPage);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const contactPage = await contactPageModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
