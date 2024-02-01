import { Schema, model } from 'mongoose';

const brand = {
  createAt: Date,
  updateAt: Date,
};
const brandSchema = new Schema<>(brand, { timestamps: true });
export const brandModel = model('brand', brandSchema);
