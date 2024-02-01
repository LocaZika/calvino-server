import { Schema, model } from 'mongoose';

const homePage = {
  createAt: Date,
  updateAt: Date,
};
const homePageSchema = new Schema<>(homePage, { timestamps: true });
export const homePageModel = model('homePage', homePageSchema);
