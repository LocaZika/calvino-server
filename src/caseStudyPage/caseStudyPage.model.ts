import { Schema, model } from 'mongoose';

const caseStudyPage = {
  createAt: Date,
  updateAt: Date,
};
const caseStudyPageSchema = new Schema<>(caseStudyPage, { timestamps: true });
export const caseStudyPageModel = model('caseStudyPage', caseStudyPageSchema);
