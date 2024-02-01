import { Request, Response } from 'express';
import { aboutPageModel } from './aboutPage.model';

export const aboutPageController = {
  index: async (req: Request, res: Response) => {
    const aboutPage = aboutPageModel.find().exec();
    res.json(aboutPage);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const aboutPage = aboutPageModel.create({  });
    res.json(aboutPage);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const aboutPage = await aboutPageModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(aboutPage);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const aboutPage = await aboutPageModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
