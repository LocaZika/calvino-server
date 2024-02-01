import { Schema, model } from 'mongoose';

const about = {
  createAt: Date,
  updateAt: Date,
};
const aboutSchema = new Schema<>(about, { timestamps: true });
export const aboutModel = model('about', aboutSchema);
