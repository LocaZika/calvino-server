import { Schema, model } from 'mongoose';

const servicePage = {
  createAt: Date,
  updateAt: Date,
};
const servicePageSchema = new Schema<>(servicePage, { timestamps: true });
export const servicePageModel = model('servicePage', servicePageSchema);
