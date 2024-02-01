import { Schema, model } from 'mongoose';

const plan = {
  createAt: Date,
  updateAt: Date,
};
const planSchema = new Schema<>(plan, { timestamps: true });
export const planModel = model('plan', planSchema);
