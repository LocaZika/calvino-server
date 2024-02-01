import { Request, Response } from 'express';
import { homePageModel } from './homePage.model';

export const homePageController = {
  index: async (req: Request, res: Response) => {
    const homePage = homePageModel.find().exec();
    res.json(homePage);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const homePage = homePageModel.create({  });
    res.json(homePage);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const homePage = await homePageModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(homePage);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const homePage = await homePageModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
