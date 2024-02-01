import { Schema, model } from 'mongoose';

const service = {
  title: {type: String, required: true},
  subTitle: {type: String, required: true},
  createAt: Date,
  updateAt: Date,
};
const serviceSchema = new Schema<TService>(service, { timestamps: true });
export const serviceModel = model('service', serviceSchema);
