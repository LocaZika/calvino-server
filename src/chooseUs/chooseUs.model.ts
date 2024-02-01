import { Schema, model } from 'mongoose';

const chooseUs = {
  createAt: Date,
  updateAt: Date,
};
const chooseUsSchema = new Schema<>(chooseUs, { timestamps: true });
export const chooseUsModel = model('chooseUs', chooseUsSchema);
