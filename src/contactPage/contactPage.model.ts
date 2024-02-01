import { Schema, model } from 'mongoose';

const contactPage = {
  createAt: Date,
  updateAt: Date,
};
const contactPageSchema = new Schema<>(contactPage, { timestamps: true });
export const contactPageModel = model('contactPage', contactPageSchema);
