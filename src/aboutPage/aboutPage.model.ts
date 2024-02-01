import { Schema, model } from 'mongoose';

const aboutPage = {
  createAt: Date,
  updateAt: Date,
};
const aboutPageSchema = new Schema<>(aboutPage, { timestamps: true });
export const aboutPageModel = model('aboutPage', aboutPageSchema);
