import { Request, Response } from 'express';
import { caseStudyModel } from './caseStudy.model';

export const caseStudyController = {
  index: async (req: Request, res: Response) => {
    const caseStudy = caseStudyModel.find().exec();
    res.json(caseStudy);
  },
  post: async (req: Request, res: Response) => {
    const {  } = req.body;
    const caseStudy = caseStudyModel.create({  });
    res.json(caseStudy);
  },
  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Must have the id!");
    } else {
      const data = req.body;
      const caseStudy = await caseStudyModel.findByIdAndUpdate(id, data, { timestamps: true });
      res.status(200).json(caseStudy);
    }
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    if ( !id ) {
      res.status(400).send("Must have the id!");
    } else {
      const caseStudy = await caseStudyModel.findByIdAndDelete(id);
      res.status(200).json('Remove successfully!');
    }
  },
}
