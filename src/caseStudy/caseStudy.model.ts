import { Schema, model } from 'mongoose';

const caseStudy = {
  createAt: Date,
  updateAt: Date,
};
const caseStudySchema = new Schema<>(caseStudy, { timestamps: true });
export const caseStudyModel = model('caseStudy', caseStudySchema);
