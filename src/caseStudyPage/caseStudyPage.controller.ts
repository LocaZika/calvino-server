import { Request, Response } from 'express';
import { caseStudyPageModel } from './caseStudyPage.model';

export const caseStudyPageController = {
  index: async (req: Request, res: Response) => {
    const caseStudyPage = caseStudyPageModel.find().exec();
    res.json(caseStudyPage);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const caseStudyPage = caseStudyPageModel.create({  });
    res.json(caseStudyPage);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const caseStudyPage = await caseStudyPageModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(caseStudyPage);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const caseStudyPage = await caseStudyPageModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
